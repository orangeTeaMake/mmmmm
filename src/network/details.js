import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  });
}

export function getRecommend() {
  return request({
    url: '/recommend'
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.topImages = itemInfo.topImages;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.discountDesc = itemInfo.discountDesc;
    this.desc = itemInfo.desc;
    this.services = services;
    this.columns = columns;
    this.lowPrice = itemInfo.lowNowPrice;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.goodsTotal = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}
