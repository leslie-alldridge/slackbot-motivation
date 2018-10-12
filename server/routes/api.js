const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/form/save', (req, res) => {
  console.log(req.body);
});

module.exports = router;
