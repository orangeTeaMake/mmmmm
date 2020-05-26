import Toast from "./Toast";

const obj = {};

obj.install = function (Vue) {
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //根据组件构造器创建一个组件对象new
  const toast = new toastConstructor();
  //将toast对象手动挂载到div元素上
  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}

export default obj;
