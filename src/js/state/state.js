import Item from '../game/items/Item';
import Wall from '../game/items/Wall';
import Wrench from '../game/items/Wrench';
import Corn from '../game/items/Corn';

export default {
  inventory: {
    items: [new Wall(), new Wrench(), new Corn(), new Item()],
    selectedItemIndex: 0,
  },
};
