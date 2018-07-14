class Inventory {
  constructor(scene) {
    this.scene = scene;
  }

  addItem(item) {
    this.scene.actions.addInventoryItem({ value: item, slot: 1 });
  }
}

export default Inventory;
