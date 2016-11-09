'use strict';

angular.module('shopnxApp')
// Sample factory (dummy)
  .factory('factory', [function () {
    var somValue = 42;
    return {
      someMethod: function () {
        return somValue;
      }
    };
  }])
  //用户管理卖家
  .factory('AdminSell',['$resource',function($resource){
    var obj={};
    obj=$resource('/api/');
  }])
  .factory('Product', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/products/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/products/count', null, {'update': { method:'PUT' }});
    obj.userProduct = $resource('/api/products/user');
    obj.productImages = $resource('/api/products/images');

    return obj;
  }])

  .factory('Shipping', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/shippings/:id', null, {'update': { method:'PUT' } });
    obj.best = $resource('/api/shippings/best', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('SortOptions', ['$translate',function($translate) {
    var obj = {};
    obj.server= [
       {name:$translate.instant('SORT_LOW_PRICE'), val:{'variants.price':1}},
       {name:$translate.instant('SORT_HIGH_PRICE'), val:{'variants.price':-1}},
       {name:$translate.instant('SORT_NAME_ASC'), val:{'name':1}},
       {name:$translate.instant('SORT_LOW_DESC'), val:{'name':-1}}
    ];
    obj.client= [
       {name:'Price Asc', val:'variants[0].price'},
       {name:'Price Desc', val:'-variants[0].price'},
       {name:'Name Asc', val:'name'},
       {name:'Name Desc', val:'-name'}
    ];
    return obj;
  }])


  .factory('Category', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/category/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/category/parent/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/category/all', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Country', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/countries/:id', null, {'update': { method:'PUT' }});
    obj.active = $resource('/api/countries/active', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Brand', ['$resource', function($resource) {
    return $resource('/api/brands/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Coupon', ['$resource', function($resource) {
    return $resource('/api/coupons/:id', null, {'update': { method:'PUT' } });
  }])
  // .factory('Shipping', ['$resource', function($resource) {
  //   return $resource('/api/shippings/:id', null, {'update': { method:'PUT' } });
  // }])
  .factory('Feature', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/features/:categoryId', null, {'update': { method:'PUT' } });
    obj.group = $resource('/api/features/group/:categoryId', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Reply', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/replies/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/replies/count');
    return obj;
  }])
  .factory('PaymentMethod', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/PaymentMethods/:id', null, {'update': { method:'PUT' } });
    obj.active = $resource('/api/PaymentMethods/active', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Customer', ['$resource', function($resource) {
    return $resource('/api/customers/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Setting', ['$resource', function($resource) {
    return $resource('/api/settings/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Order', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/orders/:id', null, {'update': { method:'PUT' } });
    obj.my = $resource('/api/orders/my', null, {'update': { method:'PUT' }});
    obj.status = [
      {name:'Pending Payment', val:402},
      {name:'Order Placed', val:201},
      {name:'Order Accepted', val:202},
      {name:'Order Executed', val:302},
      {name:'Shipped', val:200},
      {name:'Delivered', val:200},
      {name:'Cancelled', val:204},
      {name:'Not in Stock', val:404}
    ];
    return obj;
  }])
  .factory('Store', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/store/:id', null, {'update': { method:'PUT' } });
   
    return obj;
  }]);
