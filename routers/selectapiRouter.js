const express = require("express");
const router = express.Router();
const Select = require("../models/selectapi");
router.post(
  "/",
  async (req, res) => {
    try {
      let { weapons, kits, vehicles, medals, assignments, dog_tags } = req.body;
      let select = new Select({ weapons, kits, vehicles, medals, assignments, dog_tags });
      await select.save();
      res.status(200).json({ msg: "Data saved" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  }
);

router.get("/:playerId", async(req, res)=>{
    try {
        const playerId=parseInt(req.params.playerId)
        let select=await Select.findOne({playerId:playerId});
        console.log(select)
        return res.status(200).json({select});
    } catch (err) {
        console.log(err);
        res.status(500).json({err: err});
    }
})


module.exports=router;