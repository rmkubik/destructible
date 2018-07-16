import Item from '../game/items/Item';
import Wall from '../game/items/Wall';

export default {
  inventory: {
    items: [new Wall(), new Item(), new Item(), new Item()],
    selectedItemIndex: 0,
  },
};
