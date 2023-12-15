import Player from "./components/Player";
import { PlayerContext } from "./machines/playerMachine";

export const App = () => {
  return (
    <PlayerContext.Provider>
      <Player />
    </PlayerContext.Provider>
  );
};

export default App;
