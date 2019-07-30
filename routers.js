const controller = require('./controller');
const  express = require('express');
const  router = express.Router();

router.get('/index',(req,res)=>{
    controller.getIndex(req,res)
});
//监听删除的请求
router.get('/deleteHeroById',(req,res)=>{
    controller.deleteHeroById(req.res);
})
module.exports =router;