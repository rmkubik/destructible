export default {
  // functionName: {input} => {state} => ({ newState }),
  addInventoryItem: ({ item, slot }) => ({
    inventory,
    inventory: { items },
  }) => ({
    inventory: {
      ...inventory,
      items: [...items.slice(0, slot), item, ...items.slice(slot + 1)],
    },
  }),
  selectInventoryItem: slot => ({ inventory }) => ({
    inventory: {
      ...inventory,
      selectedItemIndex: slot,
    },
  }),
};
