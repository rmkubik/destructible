import { h } from 'hyperapp';

import GameComponent from './GameComponent';
import Gui from './Gui';
import config from '../game/Config';

import '../../css/components/GameContainer.scss';

const GameContainer = ({ state, actions }) => (
  <div
    class="GameContainer"
    style={{
      width: `${config.width}px`,
      height: `${config.height}px`,
    }}
  >
    <GameComponent />
  </div>
);

export default GameContainer;
