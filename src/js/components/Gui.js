import { h } from 'hyperapp';

import '../../css/components/Gui.scss';

const Gui = ({ state, actions }) => (
  <div class="Gui">
    {/* <h1>{state.inventory.items}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button> */}
    <ul class="Inventory">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
);

export default Gui;
