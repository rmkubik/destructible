import Phaser from 'phaser';

import actions from '../../actions/actions';

class HyperappActions extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);

    // this.actions = actions;
    Object.entries(actions).forEach(({ key, action }) => {
      this[key] = action;
    });
  }
}

export default HyperappActions;
