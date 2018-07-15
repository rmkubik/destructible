import { h } from 'hyperapp';

import Game from '../game/Game';

import '../../css/components/Game.scss';

let game;
let statePluginIndex;

const GameComponent = ({ actions, state }) => (
  <div
    id="Game"
    oncreate={() => {
      game = new Game(actions, state);
      statePluginIndex = game.game.plugins.plugins.findIndex(
        plugin => plugin.key === 'HyperappState',
      );
    }}
    onupdate={() => {
      game.game.plugins.plugins[statePluginIndex].plugin.update(state);
    }}
  />
);

export default GameComponent;
