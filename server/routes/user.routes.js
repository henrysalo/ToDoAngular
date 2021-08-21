const express = require('express');
const routerUser = express.Router();

const userCtrl = require('../controllers/user.controller')

routerUser.post('/', userCtrl.getUser);
routerUser.post('/', userCtrl.createEmployee);

module.exports = routerUser;