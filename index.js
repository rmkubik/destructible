import { h, app } from "hyperapp";
import "phaser";

import "./src/css/main.scss";

const initialState = {
    count: 0
};

const actionFns = {
    down: value => state => ({ count: state.count - value }),
    up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
    <div>
        <h1>{state.count}</h1>
        <button onclick={() => actions.down(1)}>-</button>
        <button onclick={() => actions.up(1)}>+</button>
    </div>
);

app(initialState, actionFns, view, document.body);
