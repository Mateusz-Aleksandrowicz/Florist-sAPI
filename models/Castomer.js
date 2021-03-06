const mongoose = require("mongoose");

const CastomerSchema = new mongoose.Schema(
    {
        username:{type:String, required:true, unique:true},
        password:{type: String, required:true},
        email:{type:String, required:true, unique:true },
        haveLoyaltyCard:{
            type:Boolean,
            default:false,
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        
    },
    {timestamps:true}
)
module.exports = mongoose.model("Castomer", CastomerSchema);