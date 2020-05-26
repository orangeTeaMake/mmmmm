import {ADD_TO_CART,ADD_COUNTER} from "./mutations-types";

export default {
  [ADD_TO_CART](state, payload) {
    state.cart.push(payload);
  },
  [ADD_COUNTER](state, payload) {
    payload.count++;
  }
}
