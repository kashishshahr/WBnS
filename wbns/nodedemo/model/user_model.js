var db=require('../dbconnection');
var user={
    login:function(item,callback)
    {
        return db.query('select * from user where user_email=? && user_password=?',[item.user_email,item.user_password],callback);
    },
    signup:function(item,callback)
    {
        return db.query("insert into user (user_email,user_password,user_type)values(?,?,?)",[item.user_email,item.user_password,item.user_type],callback);
    },
    getAllUsers:function(callback)
    {
        return db.query('select * from user',callback);
    },
    getUsersById:function(user_email,callback)
    {
        return db.query('select * from user where user_email=?',[user_email],callback);
    },
    addUser:function(item,callback)
    {
        return db.query('insert into user (user_email,user_password,user_type) values(?,?,?)',[item.user_email,item.user_password,item.user_type],callback);
    },
    deleteUser:function(user_email,callback)
    {
        return db.query('delete from user where user_email=?',[user_email],callback);
        
    },
    updateUser:function(item,callback)
    {
        return db.query("update user set user_password=?,user_type=? where user_email=?",[item.user_password,item.user_type,item.user_email],callback);        
    }
};
module.exports=user;