// app/routes.js
const path = require('path')
const mongoose = require('mongoose');
const db = require('./models/index');
const bodyParser = require('body-parser')



module.exports = function(app, passport) {

    // Check if a user is logged in
    app.get('/test', function(req, res) {
        res.json(req.user)
    })

    // Logout
    app.get('/logout', function(req, res){
        req.session.destroy();
        req.logout();
      });

    // Signup
    app.post('/signup', passport.authenticate('local-signup', {}));

    // Login
    app.post('/login', passport.authenticate('local-login', {}));

    // Serves react stuff.
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname+'/react/public/index.html'))
    // });
};



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    // res.redirect('/');
    res.json("Not logged in");
}