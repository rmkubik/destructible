import { h, app } from 'hyperapp';

import view from './src/js/components/View';
import state from './src/js/state/state';
import actions from './src/js/actions/actions';

import './src/css/main.scss';

const main = app(state, actions, view, document.body);
