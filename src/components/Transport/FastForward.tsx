import { PlayerContext } from "@/machines/playerMachine";
import { TransportButton } from "../Buttons";
import { FastForward as FastFwdIcon } from "lucide-react";

export function FastForward() {
  const { send } = PlayerContext.useActorRef();

  return (
    <TransportButton
      onClick={() => {
        send({ type: "fastFwd" });
      }}
    >
      <FastFwdIcon />
    </TransportButton>
  );
}
