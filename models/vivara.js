let db_produtos = require('../database/db_produtos.json');

const vivara = {
   
    findAll: () => db_produtos.produtos,
    
}
module.exports.vivara = vivara;