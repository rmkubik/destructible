import Item from '../game/items/Item';
import Wall from '../game/items/Wall';
import Wrench from '../game/items/Wrench';

export default {
  inventory: {
    items: [new Wall(), new Wrench(), new Item(), new Item()],
    selectedItemIndex: 0,
  },
};
