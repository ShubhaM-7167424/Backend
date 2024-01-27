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

// 5. How can i filter documents based on a specific field's length in Mongoose? 

// router.get("/find", async (req, res) => {
 
//   const user = await userModel.find({ 
//     $expr: {
//       $and:[
//         {$gte: [{$strLenCP: '$nickname'}, 14]},
//         {$lte: [{$strLenCP: '$nickname'}, 15]},
        
//       ]
//     }
//   });
//   res.send(user);
// });

router.get("/find", async (req, res) => {
  const user = await userModel.find({
    $expr: {
      $and: [
        {$gte: [{$strLenCP: '$nickname'}, 0]},
        {$lte: [{$strLenCP: '$nickname'}, 20]}
      ]
    }
  })
  res.send(user)
})



module.exports = router;
