const express = require("express");
const router = express.Router();
const Stat = require("../models/statapi");

router.post(
  "/",
  async (req, res) => {
    try {
      let { winPer,
        ScoreperMin,
        killsperMin,
        topVehicle,
        vehicleKill,
        vehicleImage,        
        topPrimary,
        primaryKill,
        primaryImage,        
        topClass,
        classKill,
        classImage,        
        topSidearm,
        sidearmKill,
        sidearmImage     
    } = req.body;
      let stats = new Stat({ 
        winPer,
        ScoreperMin,
        killsperMin,
        topVehicle,
        vehicleKill,
        vehicleImage,        
        topPrimary,
        primaryKill,
        primaryImage,        
        topClass,
        classKill,
        classImage,        
        topSidearm,
        sidearmKill,
        sidearmImage     
    });
      await stats.save();
      res.status(200).json({ msg: "Registration is Successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  }
);
router.get("/:playerId", async(req, res)=>{
    try {
        let playerId=parseInt(req.params.playerId)
        console.log(playerId)
        let stat=await Stat.findOne({playerId:playerId});
        console.log(stat)
        return res.status(200).json({stat});
    } catch (err) {
        console.log(err);
        res.status(500).json({err: err});
    }
})

module.exports=router