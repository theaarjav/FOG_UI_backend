const mongoose=require("mongoose");

const StatSchema = new mongoose.Schema(
    {
        winPer:{type: String, required: true},
        ScoreperMin:{type: String, required: true},
        killsperMin:{type: String, required: true},
        topVehicle:{type: String, required: true},
        vehicleKill:{type: Number, required: true},
        vehicleImage:{type:String},
        topPrimary:{type: String, required: true},
        primaryKill:{type: Number, required: true},
        primaryImage:{type:String},
        topClass:{type: String, required: true},
        classKill:{type: Number, required: true},
        classImage:{type:String},
        topSidearm:{type: String, required: true},
        sidearmKill:{type: Number, required: true},
        sidearmImage:{type:String},
        

    },
    {
        timestamps:true
    }
);

const Stats=mongoose.model("stats", StatSchema);
module.exports=Stats;