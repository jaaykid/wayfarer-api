const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 8000;
const MongoStore = require('connect-mongo')(session);

// Controllers 
const profileCtrl = require('./controllers/profileCtrl');
const postsCtrl = require('./controllers/postCtrl')
const cityCtrl = require('./controllers/cityCtrl')
const signupCtrl = require('./controllers/signupCtrl')
const loginCtrl = require('./controllers/loginCtrl');
const logoutCtrl = require('./controllers/logoutCtrl');


// ---------------------------- Middleware -------------------------- //
// Express CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Check Session 

app.use(session({
    name: 'sid', 
    resave: false, 
    secret: 'chili cheese dog',
    store: new MongoStore(options),
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 15,
        secure: 'auto', 
    }
}))
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


// ---------------------------- API Routes -------------------------- //
app.get('/', (req, res) => {
   res.json({testing: "testing"})
})

// // Login 
app.use('/api/v1/auth/login', loginCtrl)

// // Register
app.use('/api/v1/signup', signupCtrl)

// Logout
app.use('/api/v1/logout', logoutCtrl)

//  Users
app.use('/api/v1/profiles', profileCtrl);

// Posts 
app.use('/api/v1/posts', postsCtrl);

// Cities 
app.use('/api/v1/cities', cityCtrl)



// ---------------------------- Start Server  -------------------------- //

app.listen(PORT, () => console.log(`server started on port ${PORT}`))