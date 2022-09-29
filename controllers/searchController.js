const {createMenuObject} = require('../helpers/createMenuObject')
const Filtros = require('../models/Filtros')

const searchController = {
    buscar: (req, res) => {
        let busca =  req.query.busca;
        let resultado_busca = Filtros.findByNome(busca);
        res.render('pages/busca', {
            menu: createMenuObject('false'),
            resultado_busca,
            busca
        })
    }
}


module.exports = searchController;