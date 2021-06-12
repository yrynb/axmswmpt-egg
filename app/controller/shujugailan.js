'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getShujugailan() {
    const { ctx, service } = this;
    const res = await service.shujugailan.getShujugailan();
    ctx.body = res;
    // ctx.body = [1,2,3];
  }
}

module.exports = HomeController;
