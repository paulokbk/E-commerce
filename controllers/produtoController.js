const Produto  = require('../models/Produtos');
const Filtros = require('../models/Filtros');
const {createMenuObject} = require('../helpers/createMenuObject')

const produtoController = {

    //exibe todos produtos
    index: (req, res) =>{
        const produtos = Filtros.findAll();
        res.render('cadastroProdutos/indexProdutos', { produtos })
    },

    //exibe unico produto
    mostrar: (req, res) =>{
        const id = req.params.id;
        const produto = Filtros.findByid(id);
        res.render('pages/produto', {
            menu: createMenuObject('false'),
            id, 
            produto
        })
    },

    //exibe tela de cadastro
    criarFormulario: (req, res) =>{
        res.render('cadastroProdutos/telaCadastro')
    },

     //exibe tela de cadastro
     editarFormulario: (req, res) =>{
        const id = req.params.id;
        const produto = Filtros.findByid(id);
        res.render('cadastroProdutos/telaEdicao', { produto, id })
    },

    //cria produto
    criarProduto: (req, res) =>{
        const inputTipo = req.body.tipos;
        if(typeof inputTipo == "string"){
            req.body.tipos = [req.body.tipos]
        }

        const produto = req.body;
        const imagem = req.file.filename;
        Produto.criar(produto, imagem);
        res.redirect('/adm');
    },

    //edita produto
    editarProduto: (req, res) =>{
        const inputTipo = req.body.tipos;
        if(typeof inputTipo == "string"){
            req.body.tipos = [req.body.tipos]
        }

        const id = req.params.id;
        const produto = req.body;

        console.log()
        const imagem = req.file.filename;
        Produto.removerImagem(id);
        Produto.editar(id, produto, imagem);
        res.redirect('/adm');
    },

    //deleta produto
    deletarProduto: (req, res) =>{
        const { id } = req.params;
        Produto.removerImagem(id);
        Produto.deletar(id);
        res.redirect('/adm');
    },

}


module.exports = produtoController;