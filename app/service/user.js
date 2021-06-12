'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async getUser() {
    // get: 查询 传一个查询对象 属性对应数据库字段
    // this.app.mysql.select('user'); 查询所有
    // const user = await this.app.mysql.get('user', { password: 123123 });
    const user = await this.app.mysql.select('user');
    return user;
  }
  async insertUser() {
    // 插入一条信息
    const result = await this.app.mysql.insert('user', { name: 'lxj321', age: 10, password: '123123' });
    if (result.affectedRows) {
      return '插入成功';
    }
    return '插入失败';
  }
  async updateUser() {
    const row = {
      password: '987654331',
    };
    const options = {
      where: {
        id: 2,
      },
    };
    const result = await this.app.mysql.update('user', row, options);
    if (result.affectedRows) {
      return '更新成功';
    }
    return '更新失败';
  }
  async deleteUser() {
    const res = await this.app.mysql.delete('user', { id: 8 });
    if (res.affectedRows) {
      return '删除成功';
    }
    return '删除失败';
  }
}
module.exports = UserService;
