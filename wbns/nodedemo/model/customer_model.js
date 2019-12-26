var db = require('../dbconnection');
var customer = {
    getAllCustomer: function (callback) {
        return db.query('select * from customer', callback);
    },
    deleteCustomer:function(id,callback){
        return db.query('delete from customer where customer_id=?',[id],callback);
    },
    addCustomer:function(item,callback){
        return db.query('insert into `customer`( `customer_name`, `customer_mobileno`, `customer_address`) VALUES (?,?,?)',[item.customer_name,item.customer_mobileno,item.customer_address,item.fk_user_email],callback);
    },
};
module.exports = customer;