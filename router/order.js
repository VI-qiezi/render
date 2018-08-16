const express = require("express");
const route = express.Router();

// a标签默认发起的是get请求
route.get("/order/list",function(req, res, next){
    // res.json({code:200});
    // 第一个参数是视图的名称，如果是ejs文件，必须省略后缀名，如果是.html或.jsp，.abc,.def等你自己定义的后缀名时，必须加后缀名。
    // 第二个参数是视图需要的数据（或者说向视图传递的数据）。
    res.render("order", {
        title: "我是订单列表页面",
        content: "<h2>我是标题2</h2>",
        person: {
            name: "张三",
            age: 20,
            sex: true,
            fav: ["读书","听音乐","逛街"]
        }
    });
})

module.exports = route;