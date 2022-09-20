const fs = require('fs');
const { type } = require('os');
const {v4} = require('uuid');
const { uploadPath } = require('../config/upload');
let db = require('../database/db.json');



const writeToDB = () =>{
    const json = JSON.stringify(db);
    fs.writeFileSync('database/db.json', json);
}

const Produto = {

    criar: (produto, imagem) =>{
        db.produtos.push({ id: v4(), ...produto, imagem});
        writeToDB();
    },

    editar:(id, produto, imagem) =>{
        const produtoIndex = db.produtos.findIndex(produto => produto.id == id);
        db.produtos[produtoIndex] = { id, ...produto, imagem}
        writeToDB();
    },

    deletar: (id) =>{
        const produtoIndex = db.produtos.findIndex(produto => produto.id == id);
        db.produtos.splice(produtoIndex, 1);
        writeToDB();
    },

    removerImagem: (id) =>{
      const produto = db.produtos.find(produto => produto.id == id);
      fs.unlinkSync(
        `${uploadPath}/${produto.imagem}`
      );
    }
}

module.exports = Produto;