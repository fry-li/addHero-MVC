const model = require('model')

let controller = {
    getIndex(req, res) {
        model.getAllHero((arr) => {
            res.render('index,{arr}')
        });
    
    },
    deleteHeroById(req,res){
        let id = req.query.id;
    model.getAllHero((arr)=>{
    for(let  i = 0; i< arr.length;i++){
        if(arr[i].id == id){
            arr.splice(i,1);
            break;
        }
    }
    //删除数据后，把数据写入json
    model.writeFile(arr);
    res.send({code : 200,msg : '成功'})
    })    
    }

};
module.exports = controller;