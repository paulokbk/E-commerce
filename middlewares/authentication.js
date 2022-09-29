const authentication = (req, res, next) => {

    if (req.session.user == undefined) {
      return res.redirect('/admin/login');
    }
    next();
  }
  
  module.exports = authentication;