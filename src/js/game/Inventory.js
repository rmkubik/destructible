class Inventory {
  constructor(scene) {
    this.scene = scene;
  }

  addItem(item, slot) {
    this.scene.actions.addInventoryItem({ item, slot });
  }
}

export default Inventory;
