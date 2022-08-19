const fs = require('fs');
const {v4} = require('uuid');


let db_produtos = require('../database/db_produtos.json');


const writeToDB = () =>{
    const json = JSON.stringify(db_produtos);
    fs.writeFileSync('database/db_produtos.json' , json);
}

const Produto = {

    findAll: () => db_produtos.produtos,


    criar: (produto, imagem) =>{
        db_produtos.produtos.push({ id: v4(), ...produto, imagem});
        writeToDB();
    }
}

module.exports = Produto;