var express = require('express');
var router = express.Router();
let userModel = require('./users')

router.get('/create', async(req, res)=>{
  const usercreated = await userModel.create(
    {
      username: "Seema3283",
      name: "Seema",
      age: 1732,
    },
    {
      username: "Rahul823",
      name: "Rahul",
      age: 3600,
    },
    {
      username: "Vijay223",
      name: "Vijay",
      age: 1900,
    }
  );
  res.send(usercreated)
})

router.get('/findall', async (req, res)=>{
  const alluser = await userModel.find()
  res.send(alluser)
})

router.get('/findone',async (req, res)=>{
  const oneuser = await userModel.findOne({name: 'Seema'})
  res.send(oneuser)
})

router.get('/delete', async (req, res)=>{
  const deleteduser = await userModel.findOneAndDelete({username: 'Rahul823', name: 'Seema' })
  res.send(deleteduser)
})

module.exports = router;
