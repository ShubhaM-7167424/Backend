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

// 3. How can i search for documents within  a specific date range in Mongoose

router.get('/find', async (req, res) => {
  let date1 = new Date('2024-01-26')
  let date2 = new Date('2024-01-27')

  const user  = await userModel.find({datecreated: {$gte: date1, $lte: date2}})
  res.send(user)
})





module.exports = router;
