import { h } from 'hyperapp';

import '../../css/components/Gui.scss';

const Gui = ({ state, actions }) => (
  <div class="Gui">
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

export default Gui;
