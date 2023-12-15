export const defaultTrackData = {
  // MAIN
  volume: -32,
  volumeMode: "static",
  panMode: "static",
  soloMuteMode: "static",
  pan: 0,
  soloMute: JSON.stringify({ solo: false, mute: false }),

  // FX
  fxNames: JSON.stringify([]),
  delaySettings: JSON.stringify({
    playbackMode: "static",
    bypassed: false,
    mix: 0.5,
    delayTime: 1,
    feedback: 0.5,
  }),
  reverbSettings: JSON.stringify({
    playbackMode: "static",
    bypassed: false,
    mix: 0.5,
    preDelay: 0.5,
    decay: 0.5,
  }),
  pitchShiftSettings: JSON.stringify({
    playbackMode: "static",
    bypassed: false,
    mix: 0.5,
    pitch: 5,
  }),

  // PANELS
  panelPosition: JSON.stringify({ x: 0, y: 0 }),
  panelActive: false,
  panelSize: JSON.stringify({ width: "325px", height: "auto" }),
};
