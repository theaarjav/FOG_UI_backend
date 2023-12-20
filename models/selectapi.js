const mongoose=require("mongoose");

const SelSchema = new mongoose.Schema(
    {
        playerId:{type:Number},
        weapons:{type:Number, required:true},
        kits:{type:Number, required:true},
        vehicles:{type:Number, required:true},
        medals:{type:Number, required:true},
        assignments:{type:Number, required:true},
        dog_tags:{type:Number, required:true}
    },
    {
        timestamps:true
    }
);

const Select=mongoose.model("select", SelSchema);
module.exports=Select;