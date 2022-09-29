const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const produtoController = require('../controllers/produtoController');
const multer = require('multer');
const { storage } =  require('../config/upload');
const authentification = require('../middlewares/authentication');
const authentication = require('../middlewares/authentication');


//Rotas para login adm (CRUD produtos)

router.get('/login', adminController.formLogin);
router.post('/login', adminController.login);
router.post('/logout', adminController.logout);

//inicialização do multer com as configurações de storagee
const upload = multer({ storage });


//rota para listar todos produtos
router.get('/', authentication , produtoController.index);

//rota para mostrar o cadastro de produtos
router.get('/adicionar', produtoController.criarFormulario);

//rota para criar produto
router.post('/', upload.single('imagem') , produtoController.criarProduto);

//rota para editar produto
router.get('/editar/:id', produtoController.editarFormulario)
router.put('/:id', upload.single('imagem') , produtoController.editarProduto);

// rota para deletar produto
router.delete('/:id', produtoController.deletarProduto)




module.exports = router;
