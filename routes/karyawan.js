var express = require('express');
var router = express.Router();

/* GET karyawan page. */
router.get('/', function(req, res, next) {
  res.render('pages/karyawan/index', { title: 'Karyawan' });
});

module.exports = router;
