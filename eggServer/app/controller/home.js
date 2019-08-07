'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getList() {
    const { ctx } = this;
    ctx.body = {
      success: 1,
      list: [{
        key: 12345
      }]
    };
  }
}

module.exports = HomeController;
