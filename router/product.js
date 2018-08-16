const express = require("express");

const route = express.Router();

route.get("/product/list", function(req, res, next){
    res.render("product", {
        title: "我是产品列表页面",
        products:[
            {id: 1, name: "华为 P10", price: 2800, number: 15},
            {id: 2, name: "华为 P20", price: 3400, number: 10}
        ]
    })
})

module.exports = route;