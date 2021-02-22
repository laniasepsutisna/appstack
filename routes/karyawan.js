var express = require('express');
var router = express.Router();
const karyawanController = require("../controllers/KaryawanController");

/* GET karyawan page. */
router.get("/", karyawanController.viewKaryawan)
router.post("/", karyawanController.addKaryawan)

module.exports = router
