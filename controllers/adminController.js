// ========================================================
// Controller responsável por gerenciar a sessão de adms
// ========================================================

const Produto  = require('../models/Produtos');
const Filtros = require('../models/Filtros');
const {createMenuObject} = require('../helpers/createMenuObject')


const adminController = {
    formLogin: (req, res) =>{
        res.render('pages/login-admin', {error: null} )

    },

    login: (req, res) =>{
        const { email, senha } = req.body;
        const user = Filtros.findByEmail(email);

        if(!user){
            return res.render("pages/login-admin", {error: "Login ou senha incorretos"}) 
        }

        if(senha != user.senha){
            return res.render("pages/login-admin",{error: "Login ou senha incorretos"})
        }

        
        req.session.user = {login: user.email, id: user.id, cargo: user.cargo, nome: user.nome };
     
        res.redirect('/admin');
    },

    logout: (req, res) => {
        req.session.destroy();
        console.log(req.session)
        return res.redirect('/login');
    },
}

module.exports = adminController;