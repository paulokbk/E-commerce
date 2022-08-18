const Produto = require('../models/produtos');

const produtoController = {
    index: (req, res) =>{
        res.render('cadastroProdutos/indexProdutos')
    },

    criar: (req, res) =>{
        res.render('cadastroProdutos/telaCadastro')
    },

    criarProduto: (req, res) =>{
        const produto = req.body;
        const imagem = req.file.filename;
        Produto.criar(produto, imagem);
        res.redirect('/adm');
    },
}


module.exports = produtoController;