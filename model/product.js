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
      callbackFn([]);
    } else {
      callbackFn(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imgUrl, description, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
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

  static findById(id, callbackFn) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      callbackFn(product);
    });
  }
};
