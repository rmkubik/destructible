import { h } from 'hyperapp';

import Game from '../game/Game';

import '../../css/components/Game.scss';

const GameComponent = ({ actions, state }) => (
  <div
    id="Game"
    oncreate={() => {
      const game = new Game(actions, state);
    }}
  />
);

export default GameComponent;
