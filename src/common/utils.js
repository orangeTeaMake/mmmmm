export function throttle(func, delay = 100) {
  let timer = null;
  let oldTime = Date.now();

  return function (...args) {
    let nowTime = Date.now();
    let intervalTime = nowTime - oldTime;

    if (timer) clearTimeout(timer);
    if (intervalTime >= delay) {
      func.apply(this, args);
      oldTime = Date.now();
    } else {
      timer = setTimeout(func, delay - intervalTime);
    }
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
