import { h } from 'hyperapp';

import Inventory from './Inventory';

import '../../css/components/Gui.scss';

const Gui = ({ state, actions }) => (
  <div class="Gui">
    {/* <h1>{state.inventory.items}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button> */}
    <Inventory state={state} />
    <p class="footer">{JSON.stringify(state)}</p>
  </div>
);

export default Gui;
