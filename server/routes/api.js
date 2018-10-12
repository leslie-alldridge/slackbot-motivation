const express = require('express');
const router = express.Router();
const formDB = require('../lib/form');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/form/save', (req, res) => {
  formDB.saveForm(req.body).then(data => res.json('Quote Saved'));
});

module.exports = router;
