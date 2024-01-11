const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'))

app.get('/', (req, res) => {
    throw Error('I don"t know')
})

app.get('/error', (req, res) => {
    throw new Error('Something went wrong')
})

app.get('/profile', (req, res) => {
    res.send('Profile')
})

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { newerror: err });
});

app.listen(3000)