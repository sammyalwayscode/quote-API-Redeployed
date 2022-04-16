const express = require("express");
const router = express.Router();
const {
  getQuote,
  postQuote,
  editQuote,
  deleteQuote,
  getOneQuote,
} = require("../Controller/Controller");

router.route("/api/data").get(getQuote).post(postQuote);
router.route("/api/data/:id").get(getOneQuote);
router.route("/api/data/edit/:id").patch(editQuote);
router.route("/api/data/del/:id").delete(deleteQuote);

module.exports = router;
