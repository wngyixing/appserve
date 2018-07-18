var express = require('express');
var router = express.Router();
const submituser =require("../model/submituser")
const getallusers = require('../model/getallusers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.post("/submituser",(req,res,next)=>{
//   let {userid,username,moneybase}=req.body;
//   res.send({msg:"用户创建成功",code:1})
// })
// router.get("/getallusers",(req,res,next)=>{
//   let users=[
//         {userid:1,username:"张三",moneybase:0},
//         {userid:2,username:"李四",moneybase:0},
//         {userid:3,username:"王五",moneybase:0},
//         {userid:4,username:"赵六",moneybase:0}
//     ]
//       res.send(users)
// })
    router.post('/submituser',submituser);
// 获取所有用户的接口（用户管理）
router.get('/getallusers',getallusers);
module.exports = router;
