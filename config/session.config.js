const  app  = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');


app.use(session({
    secret: 'sorcier2',
    resave: false,
    saveUninitialized: false, /*Peut être utilie pour savoir combien de fois un utilisateur viens sur le site*/ 
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14 // session de 14 jours
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 14
    })
  }));