const {createMenuObject} = require('../helpers/createMenuObject')

const login = (req, res) => {
    res.render ('pages/login')
}



const cadastro = (req, res) => {
    res.render('pages/cadastro',{
       menu: createMenuObject('false'),
    })
}


module.exports.login = login
module.exports.cadastro = cadastro