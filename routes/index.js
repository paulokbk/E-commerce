var express = require('express');
const homeController = require('../controllers/homeController')
const searchController = require('../controllers/searchController')
const carrinhoController = require('../controllers/cartController')
var router = express.Router();


router.get('/', homeController.joias);
router.get('/casamento', homeController.casamento);
router.get('/relogios', homeController.relogios);
router.get('/acessorios', homeController.acessorios);
router.get('/masculino', homeController.masculino);
router.get('/carrinho', carrinhoController.carrinho);

router.get('/search', searchController.search);




module.exports = router;
