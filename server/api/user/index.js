'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/',  controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id',controller.show);
router.post('/', controller.create);

router.get('/ad/qqadmins', function(req,res){
      res.status(200).json('2222222222222');

});
//验证admin用户权限
router.get('/verifyAdmin/:id',  controller.verifiedAdmin);
//获取admin用户
router.get('/get/admins/all',  controller.getAlladmins)

module.exports = router;
