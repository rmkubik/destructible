export default {
  // down: value => state => ({ count: state.count - value }),
  // up: value => state => ({ count: state.count + value }),
  addInventoryItem: ({ item, slot }) => ({ inventory: { items } }) => ({
    inventory: {
      items: [...items.slice(0, slot), item, ...items.slice(slot + 1)],
    },
  }),
};
