const {createMenuObject} = require('../helpers/createMenuObject')
const { findByNome } = require("../models/Usuario");

const searchController = {
    buscar: (req, res) => {
        let busca =  req.query.busca;
        let resultado_busca = findByNome(busca);
        res.render('pages/busca', {
            menu: createMenuObject('false'),
            resultado_busca,
            busca
        })
    }
}


module.exports = searchController;