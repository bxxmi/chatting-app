const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
  return res.send("indexRouter works");
});

module.exports = router;