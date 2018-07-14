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
}

export default Inventory;
