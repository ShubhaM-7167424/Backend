var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/create", async (req, res) => {
  const user = await userModel.create({
    username: "Harshi",
    nickname: "Harshiiiiiiiii",
    description: "hello everyone ",
    categories: ["life", "travel", "science"],
  });
  res.send(user);
});

router.get('/find', async (req, res) => {
  const regex = new RegExp('^haRsHi$', 'i')
  const user  = await userModel.find({username: regex})
  res.send(user)
})

router.get('/delete', async (req, res) => {
  const user = await userModel.findOneAndDelete({
    _id: "65b36b8face10e48873505d3",
  });
  res.send(user)
})



module.exports = router;
