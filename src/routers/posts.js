const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("<h1>Hello Post</h1>");
});
router.get("/list", (req, res) => {
  res.send("<h1>List Post</h1>");
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>${id}</h1>`);
});

module.exports = router;
