'use strict';

angular.module('shopnxApp')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
	//---------------header----------------------
      BRANDS: 'Brands',
      JIANYI_GROUP: 'JIANYI GROUP',
      LOGIN: 'Login',
      INDUSTRY_LEADER: 'Industry Leader',
	  SIGN_UP: 'Sign up',
	  SETTINGS: 'Settings',
	  DASHBOARD: 'Dashboard',
	  LOGOUT: 'Logout',
	  CONTACT: 'Contact',
	  DOCUMENTATION: 'Documentation',
	  CHANGE_PASSWORD: 'Change Password',
	  ORDER: 'Order',
	  COUPONS: 'Coupons',
	  FEATURES: 'Features',	
	  CATEGORIES: 'Categories',
	  NEWS:'News',
	  NEWSMANAGE:'newsManage',
	  PRODUCT: 'Product',
	  ADMINISTRATION: 'Administration',
	  CUSTOMERS: 'Customers',
	  PAYMENT_METHOD: 'Payment Method',
	  SHIPPING_SETTINGS: 'Shipping Settings',
	  //-------------------用户管理--------------------------
	  USER_ADMINISTRATION:'User Administration',
	  DELETE:'Delete',
	  ADD:'add',
	  ID:'id',
	  USERNAME:'name',
	  GOODSTYPE:'GoodsType',
	  VERIFY:'verify',
	  HANDLE:'handle',
	  SUPPLIER:'supplier',
	  PURCHASE:'purchase',
	  SUPPLIERLIST:'supplierlist',
	  PURCHASELIST:'purchaselist',
	  //--------------------新闻资讯-----------------
	  //NEWS_INFORMATION:'news information',
	  //DROPFILE_CHARACTER:'Drop file here or click to upload',
	  //FILEDRAG_CHARACTER:'File Drag/Drop is not supported for this browser',
	  //FILENAME:'File Name',
	  //FILESIZE:'File Size',
	  //PROGRESS:'Progress',
	  //PREVIEW:'preview',
	  //------------------特色-----------------------------
	  THIS_CHARACTER:'This is a paragraph',

	  FIRST_CLASSIFCTION:'first classifction',
	  SECONDARY_CLASSIFICATION:'Secondary classification',
	  //--------------------订单----------------------------
	  ORDERS_HISTORY:'Orders History',
	  SHIPPING_CHARGE:'Shipping Charge:',
	  COUPON:'Coupon:',
	  Order_Total:'Order Total',
	  TOTAL_SPENT:'Total Spent',
	  QTY:'Qty',
	  PACKING_SIZE:'Packing/Size',
	  OUNIT_PRICE:'Unit Price',
	  
	  //----------------------修改密码-----------------------
	
	  PRIMITIVE_PASSWORD:'primitive Password',
	  NEW_PASSWORD:'New Password',
	  PASSWORD_CHARACTER:'Password must be at least 3 characters.',
	  SAVE_CHANGES:'Save changes',
	  OLD_PASSWORD:'Old password',
	  SET_PASSWORD:'Set a new password',
	  //-------------------------类别-------------------------
	
	  INFO:'info',
	  CATEGORY:'category',
	  PARENTCATEGORY:'parentCategory',
	  ACTIVE:'active',
	  //---------------------登录-------------------------------
	  ALREADY_CHARACTER:'Already our customer?',
	  EMAIL:'Email',
	  PLEASE_EMAIL_CHARACTER:'Please enter your email',
	  PASSWORD:'Password',
	  PLEASE_PASSWORD_CHARACTER:'Please enter your password',
	  PLEASE_EMAIL_PASSWORD_CHARACTER:'Please enter your email and password',
	  PLEASE_ENTER_VALID_EMAIL:'Please enter a valid email',


	  SEARCH_TIPS:'Search for a product, category or brand...',
	  SEARCH:'Search',
	  CART:'Cart',
	  HELLO:'Hello',
	 //---------------footer----------------------
	  COPYRIGHT_GOV:'Beijing ICP 11011249-1',
	  COPYRIGHT_COM:'All rights reserved by Beijing JianYi Investment and Development (Group) Co., Ltd',
	  HOMEPAGE:'HomePage',
	  ABOUT_US:'About Us',
	  TERMS_CONDITIONS:'Terms And Conditions',
	  ISSUE:'FAQ',
	  TOP_CATEGORIES:'Top categories',
	  BIM_COLLEGE:'BIM College',
	  BIM_INFORMATION:'BIM information',
	  BIM_TRAINING:'BIM training',
	  BIM_INTERACTION:'BIM interaction',
	  PROJECT_SERVICES:'Project Services',
	  PUBLISHING_TASKS:'Publishing Tasks',
	  FIND_PROJECT:'Find Project',
	  PROJECT_BIDDING:'Project Bidding',
	  ONLINE_BOOKING:'Online Booking',
	  ADDRESS_BUILD:'Bldg 5',
	  ADDRESS_COURTYARD:'Courtyard 156',
	  ADDRESS_ROAD:'Majiapu East Road',
	  ADDRESS_DISTRICT:'Fengtai District',
	  ADDRESS_CITY:'Beijing',
	  CHINA:'China',
	  MORE:'More',
	  INDUSTRY_INFORMATION:'Industry Information',
	  GET_MORE_NEWS:'The first time to obtain the relevant industry dynamics.',
	  SUBSCRIBE:'Subscribe',
	  LOGIN_MODE:'Login mode',
	 //---------------/client/app/main/main.html----------------------
	  NO_PRODUCT_FOUND:'No product found. Try removing some filters.',
	  PRICE_RANGE:'Range',
	  PRICE_RESET:'Reset',
	  PRODUCT_SORT:'Sort',
	  VIEW_DETAIL:'View detail',
	  ADD_TO_CART:'Add to cart',

	  
	//---------------/client/app/main/main.html----------------------  
	  HOT_SALE:'SALE',
	  HOT_NEW:'NEW',
	  FEATURES_FILTER_TIP:'Filter Features ...',
	  PRODUCT_SHOWING_A:'Showing ',
	  PRODUCT_SHOWING_B:' products of ',
	  PRODUCT_SHOWING_C:'in:',
	  SCROLL_TO_DETAIL:'Scroll to product details, material & care and sizing',
	  SORT_LOW_PRICE:'Low Price',
	  SORT_HIGH_PRICE:'High Price',
	  SORT_NAME_ASC:'Name(A-Z)',
	  SORT_LOW_DESC:'Name(Z-A)',
	  KEY_FEATURES:'Key Features',
	  KEY_INTRODUCTION:'Introduction',
	  PRODUCT_WEIGHT:'Weight',
	  PRODUCT_BRAND:'Brand',
	  SHARE_YOUR_FRIENDS:'Show it to your friends',
	  PRODUCT_DETAILS:'Product details',
	//----------------contact------------------------------------------------
	  ASK_QUESTION_ABOUT_SOMETHING:'Are you curious about something? Do you have some kind of problem with our products?',
	  FREE_TO_CONTACT_US:'Please feel free to contact us, our customer service center is working for you 24/7.',
	  ADDRESS_ADDRESS:'Address',
	  CALL_CENTER:'Call center',
	  ELECTRONIC_SUPPORT:'Electronic support',
	  WRITE_EMAIL_TO_US:'Please feel free to write an email to us.',
	  CONTACT_WAY:'contact way',
	  COMPANY_ADDRESS:'Company address：Beijing fengtai district mas castle road  156 number  Bldg 5',
	  CONTACT_FORM:'Contact form',
	  CONTACT_FIRSTNAME:'Firstname',
	  CONTACT_LASTNAME:'Lastname',
	  CONTACT_EMAIL:'Email',
	  CONTACT_SUBJECT:'Subject',
	  CONTACT_MESSAGE:'Message',
	  CONTACT_SEND_MESSAGE:'Send message',
	//----------------cart------------------------------------------------	  
	  CART_DETAILS:'Cart Details',
	  TOTAL_AMOUNT: 'Total Amount',
	  CLEAR_CART:'Clear Cart',
	  FILTER_CART:'Filter Cart',
	  PROCEED_TO_CHECKOUT:'Proceed to Checkout',
	  CART_PRODUCT:'Product',
	  CART_PRICE:'Price',
	  CART_QUANTITY:'Quantity',
	  CART_TOTAL:'Total',
	  CART_REMOVE:'Remove',
	  CART_ITEMS:'items',
	  CART_EMPTY:'Your cart is empty.',
	  SHOP_NOW:'Shop Now',
	 //---------------payment--------------------------------------------
	  PAY_HOME:'Home',
	  PAY_TITLE:'Payment pay',
	  PAY_ADRESS:'Adress',
	  EXPRESS_WAY:'Express way',
	  MODE_OF_PAYMENT:'Mode of payment',
	  ORDER_DESCRIBE:'Oeder to describe',
	  SHOPPING_DETAILS:' Shopping for details',
	  PHONE_NUMBER:'Cell-phone number',
	  YOUR_PHONE_NUMBER:'Cell-phone number',
	  YOUR_NAME:'Name',
	  YOU_NAME:'Name',
	  YOUR_ADRESS:'Adress',
	  YOU_ADRESS:'Adress',
	  YOUR_CITY:'City',
	  YOU_CITY:'City',
	  Y_CITY:'Please enter your city',
	  YOUR_PROVINCE:'Province',
	  YOU_PROVINCE:'Province',
	  Y_PROVINCE:'Please enter your province',
	  YOUR_POSTCODE:'Postcode',
	  YOU_POSTCODE:'Postcode',
	  HOME_BACK:'Home back',
	  PAY:'PAY',
	  ORDER_SUMMARY:'Order summary',
	  UNIT_PRICE:'Unit price',
	  DELIVERY_COSTS:'Delivery costs',
	  FREE_OF_CHARGE:'Free of charge',
	  TOTAL_PRICES:'Total prices',
    });
    $translateProvider.translations('cn', {

	  //---------------header----------------------
      BRANDS: '品牌',
      JIANYI_GROUP: '建谊集团',
      LOGIN: '登录',
      INDUSTRY_LEADER: '行业领导者',
	  SIGN_UP: '注册',
	  SETTINGS: '设置',
	  DASHBOARD: '面板',
	  LOGOUT: '退出',
	  CONTACT: '联系我们',
	  DOCUMENTATION: '文档',
	  CHANGE_PASSWORD: '修改密码',
	  ORDER: '订单',
	  COUPONS: '优惠券',
	  FEATURES: '特色',
	  CATEGORIES: '品类',
	  NEWS:'新闻',
	  NEWSMANAGE:'新闻管理',
	  PRODUCT: '商品管理',
	  ADMINISTRATION: '用户',
	  CUSTOMERS: '顾客',
	  PAYMENT_METHOD: '支付方式',
	  SHIPPING_SETTINGS: '设置',

	  //-------------------用户管理--------------------------
	  USER_ADMINISTRATION:'用户管理',
	  DELETE:'删除',
	  ADD:'添加',
	  ID:'序列号',
	  USERNAME:'用户名',
	  GOODSTYPE:'产品类型',
	  VERIFY:'审核状态',
	  HANDLE:'操作',
	  PURCHASE:'采购商',
	  SUPPLIER:'供应商',
	  SUPPLIERLIST:'供应商列表',
	  PURCHASELIST:'采购商列表',
	  //--------------------新闻资讯-----------------
	  //NEWS_INFORMATION:'新闻资讯',
	  //DROPFILECHARACTER:'删除文件或单击上传',
	  //FILEDRAGCHARACTER:'文件拖/下降这个浏览器不支持',
	  //FILENAME:'文件名',
	  //FILESIZE:'文件大小',
	  //PROGRESS:'进展',
	  //PREVIEW:'预览',
	  //-----------------------特色-------------------------
	  THIS_CHARACTER:'这是一个段落',
	
	  FIRST_CLASSIFCTION:'一级标题',
	  SECONDARY_CLASSIFICATION:'二级标题',
	  //-----------------------订单---------------------------
	  ORDERS_HISTORY:'历史订单',
	  SHIPPING_CHARGE:'运费',
	  COUPON:'优惠券:',
	  ORDER_TOTAL:'订单总额',
	  Order_Total:'订单总数',
	  TOTAL_SPENT:'总金额',
	  QTY:'数量',
	  PACKING_SIZE:'包装/尺寸',
	  OUNIT_PRICE:'单价',
	  //----------------------修改密码------------------------------

	  PRIMITIVE_PASSWORD:'原始密码',
	  NEW_PASSWORD:'新密码',
	  PASSWORD_CHARACTER:'密码必须包含三个字符',
	  SAVE_CHANGES:'保存设置',
	  OLD_PASSWORD:'原始的密码',
	  SET_PASSWORD:'请设置新密码',
	  //--------------------------类别------------------------
	  NAME:'名称',
	  INFO:'信息',
	  CATEGORY:'类别',
	  PARENTCATEGORY:'父级分类',
	  ACTIVE:'状态',
	   //---------------------登录-------------------------------
	  ALREADY_CHARACTER:'已经成为我们的客户了吗?',
	  EMAIL:'邮件',
	  PLEASE_EMAIL_CHARACTER:'请输入你的电子邮件',
	  PASSWORD:'密码',
	  PLEASE_PASSWORD_CHARACTER:'请输入你的密码？',
	  PLEASE_EMAIL_PASSWORD_CHARACTER:'请输入您的电子邮件和密码',
	  PLEASE_ENTER_VALID_EMAIL:'请输入一个有效的电子邮件',
	  SEARCH_TIPS:'查找商品，品类，品牌...',
	  SEARCH:'查找',
	  CART:'购物车',
	  HELLO:'您好',
	  //---------------footer----------------------
	  COPYRIGHT_GOV:'京ICP备11011249号-1',
	  COPYRIGHT_COM:'北京建谊投资发展（集团）有限公司',
	  HOMEPAGE:'首页',
	  ABOUT_US:'关于我们',
	  TERMS_CONDITIONS:'条款和条件',
	  ISSUE:'常见问题',
	  TOP_CATEGORIES:'热门推荐',
	  BIM_COLLEGE:'BIM学院',
	  BIM_INFORMATION:'BIM资讯',
	  BIM_TRAINING:'BIM培训',
	  BIM_INTERACTION:'BIM互动',
	  PROJECT_SERVICES:'项目服务',
	  PUBLISHING_TASKS:'发布任务',
	  FIND_PROJECT:'寻找项目',
	  PROJECT_BIDDING:'方案竞标',
	  ONLINE_BOOKING:'线上预约',
	  ADDRESS_BUILD:'5号楼',
	  ADDRESS_COURTYARD:'156号院',
	  ADDRESS_ROAD:'马家堡东路',
	  ADDRESS_DISTRICT:'丰台区',
	  ADDRESS_CITY:'北京市',
	  CHINA:'中国',
	  MORE:'了解更多',
	  INDUSTRY_INFORMATION:'行业资讯',
	  GET_MORE_NEWS:'第一时间获取行业相关动态',
	  SUBSCRIBE:'订阅',
	  LOGIN_MODE:'登录方式',
	  //---------------/client/app/main/main.html----------------------
	  NO_PRODUCT_FOUND:'没有找到相关商品。试试其它筛选条件。',
	  PRICE_RANGE:'价格范围',
	  PRICE_RESET:'重置',
	  PRODUCT_SORT:'排序',
	  VIEW_DETAIL:'查看详情',
	  ADD_TO_CART:'添加购物车',
	  //---------------/client/app/main/main.html----------------------  
	  HOT_SALE:'热卖',
	  HOT_NEW:'新品',
	  FEATURES_FILTER_TIP:'输入过滤条件',
	  PRODUCT_SHOWING_A:'显示',
	  PRODUCT_SHOWING_B:'件商品 共',
	  PRODUCT_SHOWING_C:'件商品 ',
	  SCROLL_TO_DETAIL:'转到商品介绍',
	  SORT_LOW_PRICE:'价格↑',
	  SORT_HIGH_PRICE:'价格↓',
	  SORT_NAME_ASC:'商品(A-Z)',
	  SORT_LOW_DESC:'商品(Z-A)',
	  KEY_FEATURES:'重点特色',
	  KEY_INTRODUCTION:'商品介绍',
	  PRODUCT_WEIGHT:'重量',
      PRODUCT_BRAND:'商品品牌',
	  SHARE_YOUR_FRIENDS:'分享到朋友圈',
	  PRODUCT_DETAILS:'商品详情',
	//----------------contact------------------------------------------------
	  ASK_QUESTION_ABOUT_SOMETHING:'你有什么疑问吗？或者您对我们的产品有什么问题吗？',
	  FREE_TO_CONTACT_US:'请随时与我们联系，我们的客户服务中心为您7×24在线服务',
	  ADDRESS_ADDRESS:'公司地址',
	  CALL_CENTER:'客服中心',
	  ELECTRONIC_SUPPORT:'邮件支持',
	  WRITE_EMAIL_TO_US:'请随时给我们写一封电子邮件。',
	  CONTACT_WAY:'联系方式',
	  COMPANY_ADDRESS:'公司地址：北京市丰台区马家堡东路156号院5号楼',
	  CONTACT_FORM:'联系表格',
	  CONTACT_FIRSTNAME:'姓',
	  CONTACT_LASTNAME:'名字',
	  CONTACT_EMAIL:'电子邮箱',
	  CONTACT_SUBJECT:'主题',
	  CONTACT_MESSAGE:'内容',
	  CONTACT_SEND_MESSAGE:'发送',
	  
	  //----------------cart------------------------------------------------	  
	  CART_DETAILS:'购物车详情',
	  TOTAL_AMOUNT: '总金额',
	  CLEAR_CART:'清空购物车',
	  FILTER_CART:'请输入关键字，搜索购物车商品',
	  PROCEED_TO_CHECKOUT:'去支付',
	  CART_PRODUCT:'商品名称',
	  CART_PRICE:'价格',
	  CART_QUANTITY:'数量',
	  CART_TOTAL:'总金额',
	  CART_REMOVE:'移除',
	  CART_ITEMS:'件',
	  CART_EMPTY:'购物车是空的.',
	  SHOP_NOW:'现在去购物',
	  //----------------结账-----------------------------
	  PAY_HOME:'主页',
	  PAY_TITLE:'结账',
	  PAY_ADRESS:'地址',
	  EXPRESS_WAY:'快递方式',
	  MODE_OF_PAYMENT:'支付方式',
	  ORDER_DESCRIBE:'订单概述',
	  SHOPPING_DETAILS:'购物详情',
	  PHONE_NUMBER:'手机号',
	  YOUR_PHONE_NUMBER:'手机号',
	  YOUR_NAME:'姓名',
	  YOU_NAME:'姓名',
	  YOUR_ADRESS:'地址',
	  YOU_ADRESS:'您的地址',
	  YOUR_CITY:'市',
	  YOU_CITY:'您所在的城市',
	  Y_CITY:'请输入您所在的城市',
	  YOUR_PROVINCE:'省',
	  YOU_PROVINCE:'省',
	  Y_PROVINCE:'请输入您所在的省份',
	  YOUR_POSTCODE:'邮政编码',
	  YOU_POSTCODE:'邮政编码',
	  HOME_BACK:'返回主页',
	  PAY:'支付',
	  ORDER_SUMMARY:'订单汇总',
	  UNIT_PRICE:'单价',
	  DELIVERY_COSTS:'快递费用',
	  FREE_OF_CHARGE:'免费',
	  TOTAL_PRICES:'总价',
	 
    });
	var lang = window.localStorage.lang||'cn';
	
    $translateProvider.preferredLanguage(lang);
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
    $translateProvider.useLoaderCache(true); // default is false which means disable
    $translateProvider.use(lang);
  })
;






















