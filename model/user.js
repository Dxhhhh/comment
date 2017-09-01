var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    sex:String,
    address:String
});
var UserModel = mongoose.model("user",userSchema);
module.exports = UserModel;