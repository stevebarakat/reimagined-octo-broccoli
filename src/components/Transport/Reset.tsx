import { PlayerContext } from "@/machines/playerMachine";
import { TransportButton } from "../Buttons";
import { Square } from "lucide-react";

function Reset() {
  const { send } = PlayerContext.useActorRef();

  return (
    <TransportButton
      onClick={() => {
        send({ type: "reset" });
      }}
    >
      <Square />
    </TransportButton>
  );
}

export default Reset;
