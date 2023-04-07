const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;

// https://as2.ftcdn.net/v2/jpg/02/44/72/11/1000_F_244721198_hysKAkhSvgLVyLDPs37g4FW4ZXyq8cvf.jpg
