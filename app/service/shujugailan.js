'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async getShujugailan() {
    const data = await this.app.mysql.select('shangpinxinxi');
    const user = await this.app.mysql.select('yonghu');
    // 用户数量
    const yhsl = user.length;
    // 销售总额
    const ssze = data.reduce((total, item) => {
      total += (item.jiage * item.xiaoliang);
      return total;
    }, 0);
    // 商品数量
    const spsl = data.length;
    // 订单数量
    const ddsl = data.reduce((total, item) => {
      total += item.xiaoliang;
      return total;
    }, 0);
    return { ssze, spsl, ddsl, yhsl, data };
  }
}
module.exports = UserService;
