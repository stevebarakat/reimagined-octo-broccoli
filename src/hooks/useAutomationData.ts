import { PlayerContext } from "@/machines/playerMachine";
import { useEffect, useCallback, useRef } from "react";
import {
  localStorageGet,
  localStorageSet,
  mapToObject,
  objectToMap,
  roundToFraction,
} from "@/utils";

type Props = { value: number };

function useAutomationData() {
  const { volume } = PlayerContext.useSelector((state) => {
    return state.context;
  });
  const value: number = volume;

  useWrite({ value });
  useRead();

  return null;
}

// !!! --- WRITE --- !!! //
function useWrite({ value }: Props) {
  const state = PlayerContext.useSelector((state) => state);
  const isWriting = state.matches({ ready: { automationMode: "writing" } });
  const t = state.context.t;

  const data = useRef<Map<number, object>>(new Map());

  useEffect(() => {
    if (!isWriting) return;

    t.scheduleRepeat(
      () => {
        const time: number = roundToFraction(t.seconds, 4);
        data.current.set(time, { time, value });
        const newData = mapToObject(data.current);
        localStorageSet("volumeData", newData);
      },
      0.1,
      0
    );
  }, [isWriting, t, value]);

  return data.current;
}

// !!! --- READ --- !!! //
function useRead() {
  const { send } = PlayerContext.useActorRef();
  const state = PlayerContext.useSelector((state) => state);
  const t = state.context.t;
  const isReading = state.matches({ ready: { automationMode: "reading" } });

  const setVolume = useCallback(
    (data: { time: number; value: number }) => {
      t.schedule(() => {
        send({
          type: "setVolume",
          volume: data.value,
        });
      }, data.time);
    },
    [send, t]
  );

  const volumeData = localStorageGet("volumeData");

  useEffect(() => {
    if (!isReading) return;
    const newVolData = objectToMap(volumeData);
    for (const value of newVolData) {
      setVolume(value[1]);
    }
  }, [volumeData, setVolume, isReading]);

  return null;
}
export default useAutomationData;
