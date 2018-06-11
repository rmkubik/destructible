import { h } from 'hyperapp';

import Game from '../game/Game';

import '../../css/components/Game.scss';

const GameComponent = () => (
  <div
    id="Game"
    oncreate={() => {
      const game = new Game();
    }}
  />
);

export default GameComponent;
