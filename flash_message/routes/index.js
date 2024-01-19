var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/login", function (req, res) {
  // agar login ho jaaye toh login page ke baad profile page dikhaao
  // agar naa ho to phir, mujhe is route se kisi aur route pare lejao jaise ki /error and waha par dikhao failed
  //flash message aapko ye allow karte hai ki aap is route me bane huye data ko doosre route mein use kar sako
});

router.get("/failed", function (req, res, next) {
  req.flash('age', 12)
  req.flash('name', 'rahul')
  req.flash('error', 'failed to login')
  res.send('ban gaya')
});

router.get("/checkaro", function (req, res, next) {
  console.log(req.flash('age'), req.flash('name'), req.flash('error'));
  res.send('backend ke terminal per check karo')
});

module.exports = router;
