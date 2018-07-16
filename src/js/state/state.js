import Item from '../game/items/Item';

export default {
  inventory: {
    items: [
      new Item('wall'),
      new Item('empty'),
      new Item('empty'),
      new Item('empty'),
    ],
    selectedItemIndex: 0,
  },
};
