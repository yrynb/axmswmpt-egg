'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/find', controller.user.findUser);
  // router.get('/insert', controller.user.insertUser);
  // router.get('/update', controller.user.updateUser);
  // router.get('/delete', controller.user.deleteUser);
  // 数据概览
  router.get('/shujugailan', controller.shujugailan.getShujugailan);
};
