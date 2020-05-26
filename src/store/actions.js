import {ADD_COUNTER,ADD_TO_CART} from "./mutations-types";

export default {
  operatingCart(context,payload) {
    return new Promise(((resolve, reject) => {
      let oldProduct = context.state.cart.find(item => {
        return item.iid === payload.iid;
      })
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve('当前的商品数量+1');
      } else {
        payload.count = 1;
        payload.checked = true;
        context.commit(ADD_TO_CART, payload);
        resolve('添加了新的商品');
      }
    }))
  }
}
