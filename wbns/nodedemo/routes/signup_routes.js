var express=require('express');
var router=express.Router();
var signup=require('../model/signup_model');
router.get('/',function(req,res,next){
    signup.getAllSignUpData(function(err,rows){
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
    signup.addSignUpData(req.body,function(err,rows){
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
router.delete('/:id',function(req,res,next){
    signup.deleteSignupData(req.params.id,function(err,rows){
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