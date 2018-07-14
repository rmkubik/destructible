import { h } from 'hyperapp';

import Game from '../game/Game';

import '../../css/components/Game.scss';

let game;

const GameComponent = ({ actions, state }) => (
  <div
    id="Game"
    oncreate={() => {
      game = new Game(actions, state);
    }}
    onupdate={() => {
      game.game.plugins.plugins[1].plugin.update(state);
    }}
  />
);

export default GameComponent;
