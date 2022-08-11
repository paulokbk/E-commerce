const {createMenuObject} = require('../helpers/createMenuObject')

const joias = (req, res) => {
    res.render('pages/index',{
        menu: createMenuObject('joias'),
        banner: {
            background: 'fulbanner_home.webp',
            typePage: 'home'
        }
    })
}

const casamento = (req, res) => {
    res.render('pages/index',{
        menu: createMenuObject('casamento'),
        banner: {
            background: 'fullbanner-casamento.webp',
        }
    })
}

const relogios = (req, res) => {
    res.render('pages/index',{
        menu: createMenuObject('relogios'),
        banner: {
            background: 'fullbanner_relogios_vivara_2560_1024.webp',
        }
    })
}

const acessorios = (req, res) => {
    res.render('pages/index',{
        menu: createMenuObject('acessorios'),
        banner: {
            background: 'fullbanner_acessorios_oculos_2560_1024.webp',
        }
    })
}

const masculino = (req, res) => {
    res.render('pages/index',{
        menu: createMenuObject('masculino'),
        banner: {
            background: 'fullbanner-masculino-acessorios.webp',
        }
    })
}



module.exports.joias = joias;
module.exports.casamento = casamento;
module.exports.acessorios = acessorios;
module.exports.relogios = relogios;
module.exports.masculino = masculino;
