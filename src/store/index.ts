import Vue from 'vue';
import Vuex from 'vuex';
import { Graphics } from 'pixi.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shapes: [] as Graphics[],
    displayedShapes: 0,
    shapesPerSecond: 1,
    speed: 1,
  },
  mutations: {
    setShapes({ shapes }, payload) {
      shapes = [...shapes, payload];
    },
    setDisplayedShapes(state, payload) {
      state.displayedShapes = payload;
    },
    plusShapePerSecond(state) {
      state.shapesPerSecond += 1;
    },
    minusShapePerSecond(state) {
      state.shapesPerSecond = state.shapesPerSecond > 1 ? state.shapesPerSecond - 1 : 1;
    },
    plusSpeed(state) {
      state.speed += 1;
    },
    minsSpeed(state) {
      state.speed = state.speed > 1 ? state.speed - 1 : 1;
    },
  },
});
