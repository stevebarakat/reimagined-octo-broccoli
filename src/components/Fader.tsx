import VuMeter from "@/components/VuMeter";
import { PlayerContext } from "@/machines/playerMachine";
import AutomationMode from "./AutomationMode";
import useAutomationData from "@/hooks/useAutomationData";

export default function Fader() {
  const { send } = PlayerContext.useActorRef();
  const { volume, meterVal } = PlayerContext.useSelector(
    (state) => state.context
  );

  useAutomationData();

  if (typeof meterVal !== "number") return;
  function setVolume(e: React.FormEvent<HTMLInputElement>): void {
    send({
      type: "setVolume",
      volume: parseFloat(e.currentTarget.value),
    });
  }

  return (
    <div>
      <div className="channel">
        <div className="fader-wrap">
          <div className="window">{`${(volume + 100).toFixed(0)} dB`}</div>
          <VuMeter meterValue={meterVal} height={250} width={25} />
          <input
            className="range-y volume"
            min={-100}
            max={0}
            step={0.1}
            type="range"
            value={volume}
            onChange={setVolume}
          />
          <div className="channel-label">Volume</div>
        </div>
        <AutomationMode />
      </div>
    </div>
  );
}
