const {createMenuObject} = require('../helpers/createMenuObject')

const login = (req, res) => {
    res.render ('pages/login')
}

const checkout = (req, res) => {

    res.render ('pages/checkout', {menu: createMenuObject('false')})

}

module.exports.login = login
module.exports.checkout = checkout