import Clock from "./Clock";
import Reset from "./Reset";
import Rewind from "./Rewind";
import { FastForward as FF } from "./FastForward";
import Play from "./Play";

function Transport() {
  return (
    <div className="flex-y gap12">
      <div className="flex gap4">
        <Reset />
        <Rewind />
        <Play />
        <FF />
      </div>
      <Clock />
    </div>
  );
}

export default Transport;
