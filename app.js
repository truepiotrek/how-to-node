const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", {pageTitle: "Page not found"})
})

app.listen(3000)
