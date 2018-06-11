import { h } from 'hyperapp';

import GameContainer from './GameContainer';

const View = (state, actions) => (
  <div>
    <GameContainer state={state} actions={actions} />
  </div>
);

export default View;
