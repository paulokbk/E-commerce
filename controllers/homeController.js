const {createMenuObject} = require('../helpers/createMenuObject')
const Filtros = require('../models/Filtros')


const homeController = {
    
    joias: (req, res) => {
        const bestSellers = Filtros.FindBestSeller();
        const produtos = Filtros.findAll();
        res.render('pages/index',{
            menu: createMenuObject('joias'),
            banner: {
                background: 'fulbanner_home.webp',
                typePage: 'home'
            },
            produtos, bestSellers
        })
    },

    casamento: (req, res) => {
        const produtos = Filtros.findByCategoria('casamento');
        res.render('pages/index',{
            menu: createMenuObject('casamento'),
            banner: {
                background: 'fullbanner-casamento.webp',
            },
            produtos
        })
    },

    relogios:  (req, res) => {
        let produtos = Filtros.findByCategoria('relogios')
        res.render('pages/index',{
            menu: createMenuObject('relogios'),
            banner: {
                background: 'fullbanner_relogios_vivara_2560_1024.webp',
            },
            produtos
        })
    },

    acessorios: (req, res) => {
        let produtos = Filtros.findByCategoria('acessorios')
        res.render('pages/index',{
            menu: createMenuObject('acessorios'),
            banner: {
                background: 'fullbanner_acessorios_oculos_2560_1024.webp',
            },
            produtos
        })
    },

    masculino: (req, res) => {
    let produtos = Filtros.findByCategoria('masculino')
        res.render('pages/index',{
            menu: createMenuObject('masculino'),
            banner: {
                background: 'fullbanner-masculino-acessorios.webp',
            },
            produtos
        })
    }

    
}

module.exports = homeController;