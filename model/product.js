const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callbackFn) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      return callbackFn([]);
    }
    callbackFn(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll(callbackFn) {
    getProductsFromFile(callbackFn);
  }
};
