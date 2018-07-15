import { h } from 'hyperapp';

import '../../css/components/Inventory.scss';

const Inventory = ({ state }) => {
  const items = state.inventory.items.map(item => <li>{item}</li>);
  return <ul class="Inventory">{items}</ul>;
};

export default Inventory;
