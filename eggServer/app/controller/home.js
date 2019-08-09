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
      "success": true,
      "errorCode": 10000,
      "msg": "",
      "data": {
        "count": 7837,
        "rows": [
          {
            "id": 17982,
            "processingStatus": 2,
            "vendorId": 25390,
            "solutionId": 0,
            "vendorName": "A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are open source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Other rules may be imposed to organize content",
            "orderIdTuniu": 19274516,
            "orderIdVendor": "1598518791",
            "start": null,
            "limit": null,
            "isError": 0,
            "refundReasonRemark": "",
            "refundFlyFee": 0.00,
            "refundType": "自愿",
            "refundFeeChange": 0.00,
            "result": 1,
            "refundCustomers": null,
            "vendorTotalAccount": 0
          },
          {
            "id": 17981,
            "processingStatus": 2,
            "vendorId": 25390,
            "solutionId": 0,
            "vendorName": "lar wiki-based website, and is one of the most widely viewed sites in the world, having been ranked in the top ten since 2007.[3] Wikipedia is not a single wiki but rather a collection of hundreds of wikis, with each one pertaining to a specific language. In addition to Wikipedia, there are hundreds of thousands of other wikis in use, both public and private, includi",
            "orderIdTuniu": 19287963,
            "orderIdVendor": "1598796891",
            "customerId": 0,
            "customerName": "张娣/成人",
            "customerType": 0,
            "applicationTime": null,
            "ownerId": 10981,
            "ownerName": "季娟娟",
            "resourceType": 21,
            "refundStatus": 4,
            "addTime": "2016-01-25",
            "vendorTotalAccount": 0
          },
          {
            "id": 17980,
            "processingStatus": 2,
            "vendorId": 25390,
            "solutionId": 0,
            "vendorName": "The English-language Wikipedia has the largest collection of articles; as of September 2016, it had over five million articles. Ward Cunningham, the developer of the first wiki software",
            "orderIdTuniu": 20230592,
            "orderIdVendor": "1626020511",
            "customerId": 0,
            "customerName": "许道军/成人，赵磊/成人，周苏梅/成人",
            "customerType": 0,
            "addTime": "2016-01-25",
            "delFlag": 0,
            "updateTime": "2016-01-25",
            "start": null,
            "limit": null,
            "isError": 0,
            "refundReasonRemark": "",
            "refundFlyFee": 0.00,
            "refundType": "自愿"
          }
        ]
      }
    }
  }

}

module.exports = HomeController;
