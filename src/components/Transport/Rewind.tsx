import { PlayerContext } from "@/machines/playerMachine";
import { TransportButton } from "../Buttons";
import { Rewind as RewindIcon } from "lucide-react";

function Rewind() {
  const { send } = PlayerContext.useActorRef();

  return (
    <TransportButton
      onClick={() => {
        send({ type: "rewind" });
      }}
    >
      <RewindIcon />
    </TransportButton>
  );
}

export default Rewind;
