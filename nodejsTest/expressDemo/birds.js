/**
 * Created by DELL on 2017/9/11.
 */

var express = require('express');
var router = express.Router();

//该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log("Time:" + new Date());
    next();
});

//定义网站主页的路由
router.get('/', function (req, res) {
    res.send("Birds home page");
});

//定义about页面的路由
router.get('/about', function (req, res) {
    res.send("About birds");
});

module.exports = router;