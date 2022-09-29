var express = require('express');
const userController = require('../controllers/userController.js')
const homeController = require('../controllers/homeController')
const carrinhoController = require('../controllers/cartController')
const searchController = require('../controllers/searchController')
const produtoController = require('../controllers/produtoController')
var router = express.Router();


router.get('/', homeController.joias);
router.get('/casamento', homeController.casamento);
router.get('/relogios', homeController.relogios);
router.get('/acessorios', homeController.acessorios);
router.get('/masculino', homeController.masculino);
router.get('/carrinho', carrinhoController.carrinho);
router.get('/login', userController.login);
router.get('/checkout', userController.checkout);
router.get('/busca', searchController.buscar);

//rota para exibir produto individual
router.get('/produto/:id', produtoController.mostrar);





module.exports = router;
