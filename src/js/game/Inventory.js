class Inventory {
  constructor(scene) {
    this.scene = scene;
  }

  getSelectedItem() {
    return this.scene.state.inventory.items[
      this.scene.state.inventory.selectedItemIndex
    ];
  }

  addItem(item, slot) {
    this.scene.actions.addInventoryItem({ item, slot });
  }

  useItem(user) {
    this.scene.state.inventory.items[
      this.scene.state.inventory.selectedItemIndex
    ].use(user, this.scene);
  }

  selectItem(slot) {
    this.scene.actions.selectInventoryItem(slot);
  }
}

export default Inventory;
