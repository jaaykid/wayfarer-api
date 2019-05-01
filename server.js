const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000;

// Controllers 
const contactsCtrl = require('./controllers/userCtrl');
const postsCtrl = require('./controllers/postCtrl')



// ---------------------------- Middleware -------------------------- //
// Express CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


// ---------------------------- HTML Routes -------------------------- //

app.get('/', (req,res) => {
    res.send('<h1> This is where react will be </h1>')
})


// ---------------------------- API Routes -------------------------- //


// Contacts
// app.use('/api/v1/users', contactsCtrl);

// // Posts 

// app.use('/api/v1/posts', postsCtrl);


// ---------------------------- Start Server  -------------------------- //

app.listen(PORT, () => console.log(`server started on port ${PORT}`))