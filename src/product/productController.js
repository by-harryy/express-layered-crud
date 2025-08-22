// layer untuk handle request dan response
// handle validasi body

const express = require("express");

const {
  getAllProducts,
  getProductsById,
  createProduct,
  delProductById,
  editProductById,
} = require("./productService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await getProductsById(productId);

    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const product = await createProduct(newProductData);

    res.send({
      data: product,
      message: "create products succes",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    await delProductById(productId);
    res.send("product deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    
    const productId = parseInt(req.params.id);
    const productData = req.body;
  
    if (
      !(
        productData.name &&
        productData.price &&
        productData.description &&
        productData.image
      )
    ) {
      return res.status(400).send("Some filed are missing");
    }
  
    const product = await editProductById(productId, productData);
  
    res.send({
      data: product,
      message: "succesfull update product",
    });
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await editProductById(parseInt(productId), productData);

    res.send({
      data: product,
      message: "succesfull update product",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
