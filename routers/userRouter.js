const express = require("express");
const router = express.Router();
const User = require("../models/userapi");

router.post(
  "/",
  async (req, res) => {
    try {
      let { name, level, score } = req.body;
      let user = new User({ name, level, score });
      await user.save();
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
        let user=await User.findOne({playerId:playerId});
        console.log(user)
        return res.status(200).json({user});
    } catch (err) {
        console.log(err);
        res.status(500).json({err: err});
    }
})

module.exports=router