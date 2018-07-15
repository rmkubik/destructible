class Inventory {
  constructor(scene) {
    this.scene = scene;
  }

  addItem(item, slot) {
    this.scene.actions.addInventoryItem({ item, slot });
  }

  useItem(slot) {
    console.log(this.scene.state.inventory.items[slot]);
  }

  selectItem(slot) {
    this.scene.actions.selectInventoryItem(slot);
  }
}

export default Inventory;
