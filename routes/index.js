var express = require('express');
const pagesController = require('../controllers/pagesController')
var router = express.Router();


router.get('/', pagesController.home);


module.exports = router;
