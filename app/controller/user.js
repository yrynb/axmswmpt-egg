'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async findUser() {
    const { ctx } = this;
    const user = await this.service.user.getUser();
    ctx.body = user;
  }
  async insertUser() {
    const { ctx, service } = this;
    const res = await service.user.insertUser();
    console.log(res);
    ctx.body = { message: res };
  }
  async updateUser() {
    const { ctx, service } = this;
    const res = await service.user.updateUser();
    ctx.body = { message: res };
  }
  async deleteUser() {
    const { ctx, service } = this;
    const res = await service.user.deleteUser();
    ctx.body = { message: res };
  }
}

module.exports = UserController;
