const express =require('express');

const app = express();


app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
});

app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'));

//设置pug为express的默认的模板引擎
// app.set('view engine','pug');

// app.get('/bbbb.html',(req,res)=>{
//     res.render('bbbb',{ title:'Hey',massge:'hello world'});
// })

//学习ejs作为模板引擎使用
// app.set ('view engine','ejs');
// app.get('/ejs',(req,res)=>{
//     res.render('ejs-template',{ name:'wangwang',age:12,gender:'man',id:52})
// })

//使用app监听浏览器请求
app.get('/',(req,res)=>{
    res.send('hey! gril')
});
