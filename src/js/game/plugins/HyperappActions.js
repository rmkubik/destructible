import Phaser from 'phaser';

class HyperappActions extends Phaser.Plugins.BasePlugin {}

function HyperappActionsFactory(actions) {
  Object.assign(HyperappActions.prototype, actions);

  return HyperappActions;
}

export default HyperappActionsFactory;
