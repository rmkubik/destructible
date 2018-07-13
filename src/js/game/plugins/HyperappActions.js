import Phaser from 'phaser';

import actions from '../../actions/actions';

class HyperappActions extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);

    Object.assign(this, actions);
  }
}

export default HyperappActions;
