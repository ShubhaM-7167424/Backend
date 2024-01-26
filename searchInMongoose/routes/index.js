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

// 3. How can i filter documents based on the existence of a field in Mongoose?

router.get('/find', async (req, res) => {

  const user  = await userModel.find({description: {$exists: true}})
  res.send(user)
})





module.exports = router;
