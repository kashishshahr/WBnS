var express=require('express');
var router=express.Router();
var user=require('../model/user_model');
router.get('/',function(req,res,next){
    user.getAllUsers(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    user.addUser(req.body,function(err,rows){
       if(err) 
       {
           res.json(err);
       }
       else
       {
           res.json(rows);
       }
    });
});
router.delete('/:user_id',function(req,res,next){
    user.deleteUser(req.params.id,function(err,rows){
    if(err) 
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
    });
});

module.exports=router;