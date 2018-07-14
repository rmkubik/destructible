export default {
  // down: value => state => ({ count: state.count - value }),
  // up: value => state => ({ count: state.count + value }),
  addInventoryItem: ({ value, slot }) => ({ inventory: { items } }) => ({
    inventory: {
      items: [...items.slice(0, slot), value, ...items.slice(slot + 1)],
    },
  }),
};
