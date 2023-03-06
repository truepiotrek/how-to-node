const express = require('express');

const app = express();

app.use(( req, res, next ) => {
  console.log("...booting");
  next();
})

app.use('/add-product', ( req, res, next ) => {
  res.send("<h1>This is 'Add product' page</h1>")
})

app.use('/', ( req, res, next ) => {
  res.send("<h1>Main page</h1>")
})

app.listen(3000)
