const {createMenuObject} = require('../helpers/createMenuObject')
const {vivara} = require('../models/vivara')

const joias = (req, res) => {
    let lista = vivara.getAll()
    res.render('pages/index',{
        menu: createMenuObject('joias'),
        banner: {
            background: 'fulbanner_home.webp',
            typePage: 'home'
        },
        lista
    })
}

const casamento = (req, res) => {
    let lista = vivara.getAll()
    res.render('pages/index',{
        menu: createMenuObject('casamento'),
        banner: {
            background: 'fullbanner-casamento.webp',
        },
        lista
    })
}

const relogios = (req, res) => {
    let lista = vivara.getAll()
    res.render('pages/index',{
        menu: createMenuObject('relogios'),
        banner: {
            background: 'fullbanner_relogios_vivara_2560_1024.webp',
        },
        lista
    })
}

const acessorios = (req, res) => {
    let lista = vivara.getAll()
    res.render('pages/index',{
        menu: createMenuObject('acessorios'),
        banner: {
            background: 'fullbanner_acessorios_oculos_2560_1024.webp',
        },
        lista
    })
}

const masculino = (req, res) => {
    let lista = vivara.getAll()
    res.render('pages/index',{
        menu: createMenuObject('masculino'),
        banner: {
            background: 'fullbanner-masculino-acessorios.webp',
        },
        lista
    })
}
const produto = (req, res) => {
    res.render('pages/produto',{
        menu: createMenuObject('false'),
    })
}


module.exports.joias = joias;
module.exports.casamento = casamento;
module.exports.acessorios = acessorios;
module.exports.relogios = relogios;
module.exports.masculino = masculino;
module.exports.produto = produto;
