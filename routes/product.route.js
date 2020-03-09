const express = require("express");
const router = express.Router();
var verifyJWT_MW = require("../middleware/jwt-verify");

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require("../controllers/product.controller");

router.all("*", verifyJWT_MW.verifyJWT_MW);

router.post("/create", product_controller.product_create);
router.get("/:id", product_controller.product_details);
router.get("/", product_controller.all_product_details);
router.put("/:id/update", product_controller.product_update);
router.delete("/:id/delete", product_controller.product_delete);

module.exports = router;
