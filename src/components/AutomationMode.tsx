import { PlayerContext } from "@/machines/playerMachine";
import Toggle from "./Buttons/Toggle";
import { PlayCircle, CircleDot, MinusCircle } from "lucide-react";

function AutomationMode() {
  const { send } = PlayerContext.useActorRef();
  const state = PlayerContext.useSelector((state) => state);

  function setAutomationMode(e: React.FormEvent<HTMLInputElement>): void {
    const mode: "read" | "write" | "off" = e.currentTarget.value;
    // console.log("mode", mode);
    // console.log(state.matches(e.currentTarget.value));
    // console.log("state", state.value.ready.automationMode);
    // console.log("e.currentTarget.value", e.currentTarget.value);
    send({ type: mode });
  }

  return (
    <div className="flex gap4">
      {/* {automationMode} */}
      <Toggle
        type="radio"
        value="write"
        name="playback-mode"
        onChange={setAutomationMode}
        checked={state.matches({ ready: { automationMode: "writing" } })}
      >
        <CircleDot />
      </Toggle>

      <Toggle
        type="radio"
        value="read"
        name="playback-mode"
        onChange={setAutomationMode}
        checked={state.matches({ ready: { automationMode: "reading" } })}
      >
        <PlayCircle />
      </Toggle>

      <Toggle
        type="radio"
        value="off"
        name="playback-mode"
        onChange={setAutomationMode}
        checked={state.matches({ ready: { automationMode: "off" } })}
      >
        <MinusCircle />
      </Toggle>
    </div>
  );
}

export default AutomationMode;
