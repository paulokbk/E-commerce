let db = require('../database/db.json');

const Filtros = {
    findAll: () => db.produtos,

    findByCategoria: (tipo) => {
        return db.produtos.filter( produto =>{
            for(let i = 0; i < produto.tipos.length; i++){
                if(produto.tipos[i] == tipo){
                        return produto
                }
            }
        })  
    },

    findByNome: (nome) => {
        return db.produtos.filter(produto => {
            if (produto.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1) {
                return true
            } else {
                return false
            }
        })
    },

    findByid: (id) =>{
        return db.produtos.filter(produto =>{
            if(produto.id == id){
                return true
            }else{
                return false
            }
        })
    },

    FindBestSeller: () => {
        return db.produtos.filter(produto =>{
            if(produto.bestseller == "sim"){
                return produto
            }
        })
    },
    findByEmail: (email) => {
        const user = db.administradores.find(user => user.email === email);
        return user;
    },
}
module.exports = Filtros;