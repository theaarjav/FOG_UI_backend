const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        level:{type: Number, required: true},
        score:{type: Number, required: true}
    },
    {
        timestamps:true
    }
);

const User=mongoose.model("user", UserSchema);
module.exports=User;