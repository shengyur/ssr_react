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
            "vendorName": "途之旅携程",
            "orderIdTuniu": 19274516,
            "orderIdVendor": "1598518791",
            "customerId": 0,
            "customerName": "杨菁/成人",
            "customerType": 0,
            "sequence": 0,
            "ticketNo": "",
            "flightNo": "",
            "orgCityIataCode": "",
            "orgCityName": "",
            "dstCityIataCode": "",
            "dstCityName": "",
            "departAirportCode": null,
            "arriveAirportCode": null,
            "departureTime": "2016-01-24 16:15:00",
            "lossType": 0,
            "costPrice": 0.00,
            "refundFeeOld": 0.00,
            "vendorRefundOld": 0.00,
            "refundFee": 0.00,
            "vendorRefund": 0.00,
            "allocationTime": null,
            "applicationTime": null,
            "ownerId": 10981,
            "ownerName": "季娟娟",
            "resourceType": 21,
            "refundStatus": 4,
            "addTime": "2016-01-25",
            "delFlag": 0,
            "updateTime": "2016-01-25",
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
            "vendorName": "途之旅携程",
            "orderIdTuniu": 19287963,
            "orderIdVendor": "1598796891",
            "customerId": 0,
            "customerName": "张娣/成人",
            "customerType": 0,
            "sequence": 0,
            "ticketNo": "",
            "flightNo": "",
            "orgCityIataCode": "",
            "orgCityName": "",
            "dstCityIataCode": "",
            "dstCityName": "",
            "departAirportCode": null,
            "arriveAirportCode": null,
            "departureTime": "2016-01-25 17:20:00",
            "lossType": 0,
            "costPrice": 0.00,
            "refundFeeOld": 0.00,
            "vendorRefundOld": 0.00,
            "refundFee": 0.00,
            "vendorRefund": 0.00,
            "allocationTime": null,
            "applicationTime": null,
            "ownerId": 10981,
            "ownerName": "季娟娟",
            "resourceType": 21,
            "refundStatus": 4,
            "addTime": "2016-01-25",
            "delFlag": 0,
            "updateTime": "2016-01-25",
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
            "id": 17980,
            "processingStatus": 2,
            "vendorId": 25390,
            "solutionId": 0,
            "vendorName": "途之旅携程",
            "orderIdTuniu": 20230592,
            "orderIdVendor": "1626020511",
            "customerId": 0,
            "customerName": "许道军/成人，赵磊/成人，周苏梅/成人",
            "customerType": 0,
            "sequence": 0,
            "ticketNo": "",
            "flightNo": "",
            "orgCityIataCode": "",
            "orgCityName": "",
            "dstCityIataCode": "",
            "dstCityName": "",
            "departAirportCode": null,
            "arriveAirportCode": null,
            "departureTime": "2016-01-24 19:35:00",
            "lossType": 0,
            "costPrice": 0.00,
            "refundFeeOld": 0.00,
            "vendorRefundOld": 0.00,
            "refundFee": 0.00,
            "vendorRefund": 0.00,
            "allocationTime": null,
            "applicationTime": null,
            "ownerId": 4889,
            "ownerName": "谢堃",
            "resourceType": 21,
            "refundStatus": 4,
            "addTime": "2016-01-25",
            "delFlag": 0,
            "updateTime": "2016-01-25",
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
          }
        ]
      }
    }
  }
      
}

module.exports = HomeController;
