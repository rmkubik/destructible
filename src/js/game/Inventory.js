class Inventory {
  constructor(scene) {
    this.scene = scene;
  }

  addItem(item, slot) {
    this.scene.actions.addInventoryItem({ item, slot });
  }

  useItem() {
    this.scene.state.inventory.items[
      this.scene.state.inventory.selectedItemIndex
    ].use();
  }

  selectItem(slot) {
    this.scene.actions.selectInventoryItem(slot);
  }
}

export default Inventory;
