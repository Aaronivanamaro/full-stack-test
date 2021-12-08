const express = require("express");
const zooController = require("../controller/zooController");
const parserController = require("../controller/parserController");
// const loggerController = require("../controller/loggerController");

const router = express.Router();

router.post('/zoo', zooController);
router.post('/parser', parserController);
// router.post('/logger', loggerController);

module.exports = router;