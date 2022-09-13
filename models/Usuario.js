const { Console } = require('console');
const fs = require('fs');
const { type } = require('os');
const {v4} = require('uuid');
let db = require('../database/db_produtos.json');

const Usuario = {
    findByNome: (nome) => {
        return db.produtos.filter(produto => {
            if (produto.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1) {
                return true
            } else {
                return false
            }
        })
    } 
}

module.exports = Usuario;