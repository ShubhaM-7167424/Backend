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

// 2. How do i found documents where an array field contains all of a set of values 
router.get('/find', async (req, res) => {
  const user  = await userModel.find({categories: {$all: ['life', 'travel']}})
  res.send(user)
})





module.exports = router;
