var express = require("express");
var router = express.Router();

// check after deleting sessions
router.get("/createsession", (req, res) => {
  req.session.ban = true;
  res.send("session created");
});

router.get("/checksession", (req, res) => {
  if (req.session.ban === true) {
    res.send("you are banned");
  } else {
    res.send("not banned");
  }
});

router.get("/destroysession", (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("session destroyed");
  });
});

// check after deleting cookie
router.get('/createcookie', (req, res) => {
  res.cookie('age', 28)
  res.send('cookie created');
})

router.get('/readcookie', (req, res) => {
  console.log(req.cookies);
  console.log(req.cookies.age);
  res.send('read cookies on terminal')
})

router.get('/deletecookie', (req, res) => {
  res.clearCookie('age')
  res.send('cookie deleted');
})

module.exports = router;
