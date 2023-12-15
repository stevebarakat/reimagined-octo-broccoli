import { createActorContext } from "@xstate/react";
import { assign, createMachine, fromObservable, fromPromise } from "xstate";
import { dbToPercent, formatMilliseconds, makeLogarithmic } from "@/utils";
import { nelly } from "@/assets/nelly";
import {
  start as initializeAudio,
  getContext as getAudioContext,
  Transport as t,
  Destination,
  Player,
  Meter,
  loaded,
} from "tone";
import { interval, animationFrameScheduler } from "rxjs";

const audio = getAudioContext();

type InitialConext = {
  song: SourceSong;
  currentTime: string;
  volume: number;
  meterVal: number | number[] | undefined;
};

const initialContext: InitialConext = {
  song: nelly,
  currentTime: "00:00:00",
  volume: -32,
  meterVal: 0,
};

export const playerMachine = createMachine(
  {
    id: "player",
    context: initialContext,
    initial: "idle",
    states: {
      idle: {
        entry: {
          type: "initPlayer",
        },
        invoke: {
          src: "loaderActor",
          id: "getting.ready",
          onDone: [
            {
              target: "ready",
            },
          ],
          onError: [
            {
              target: "idle",
            },
          ],
        },
      },
      ready: {
        states: {
          automationMode: {
            initial: "off",
            states: {
              off: {
                on: {
                  write: "writing",
                  read: "reading",
                },
              },
              writing: {
                on: {
                  off: "off",
                  read: "reading",
                },
              },
              reading: {
                on: {
                  off: "off",
                  write: "writing",
                },
              },
            },
          },
          playbackMode: {
            invoke: {
              src: "tickerActor",
              id: "start.ticker",
              onSnapshot: {
                actions: assign(({ context }) => {
                  const meter = new Meter();
                  Destination.connect(meter);
                  context.currentTime = formatMilliseconds(t.seconds);
                  context.meterVal = meter.getValue();
                }),
              },
            },
            initial: "stopped",
            states: {
              stopped: {
                on: {
                  play: {
                    target: "playing",
                  },
                },
              },
              playing: {
                entry: {
                  type: "play",
                },
                on: {
                  reset: {
                    target: "stopped",
                    actions: {
                      type: "reset",
                    },
                  },
                  pause: {
                    target: "stopped",
                    actions: {
                      type: "pause",
                    },
                  },
                },
              },
            },
            on: {
              fastFwd: {
                guard: "canFF",
                actions: {
                  type: "fastFwd",
                },
              },
              rewind: {
                guard: "canRew",
                actions: {
                  type: "rewind",
                },
              },
              setVolume: {
                actions: {
                  type: "setVolume",
                },
              },
              setMeter: {
                actions: {
                  type: "setMeter",
                },
              },
            },
          },
        },
        type: "parallel",
      },
    },
    types: {} as {
      context: InitialConext;
      events:
        | { type: "write" }
        | { type: "read" }
        | { type: "off" }
        | { type: "play"; t: Transport }
        | { type: "reset" }
        | { type: "pause" }
        | { type: "fastFwd" }
        | { type: "rewind" }
        | { type: "setVolume"; volume: number }
        | { type: "setMeter"; meterVal: number };
      guards: { type: "canFF" } | { type: "canRew" };
    },
  },
  {
    actions: {
      initPlayer: ({ context: { song } }) => {
        return {
          player: new Player(song.url)
            .sync()
            .start(0, song.start)
            .toDestination(),
        };
      },
      play: assign(() => {
        if (audio.state === "suspended") {
          initializeAudio();
          return t.start();
        } else {
          return t.start();
        }
      }),
      pause: assign(() => {
        return t.pause();
      }),
      reset: assign(() => {
        t.stop();
        t.seconds = 0;
      }),
      fastFwd: assign(() => {
        t.seconds = t.seconds + 10;
      }),
      rewind: assign(() => {
        t.seconds = t.seconds - 10;
      }),
      setMeter: assign(({ context, event }) => {
        if (event.type !== "setMeter") throw new Error();
        context.meterVal = event.meterVal;
        return {
          meterVal: context.meterVal,
        };
      }),
      setVolume: assign(({ event }) => {
        if (event.type !== "setVolume") throw new Error();
        const scaled = dbToPercent(makeLogarithmic(event.volume));
        Destination.volume.value = scaled;
        return {
          volume: event.volume,
        };
      }),
    },
    actors: {
      loaderActor: fromPromise(async () => await loaded()),
      tickerActor: fromObservable(() => interval(0, animationFrameScheduler)),
    },
    guards: {
      canFF: ({ context: { song } }) => {
        return t.seconds < song.end;
      },
      canRew: ({ context: { song } }) => {
        return t.seconds > song.start;
      },
    },
    delays: {},
  }
);
export const PlayerContext = createActorContext(playerMachine);
