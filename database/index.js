const mongoose= require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }`);

mongoose.connect(env.dbUrl ,{useUnifiedTopology:true, useNewUrlParser:true , useCreateIndex: true, useCreateIndex: true 
/*mongoose.connect('mongodb+srv://anick:1234@cluster0.5nmuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useUnifiedTopology:true, useNewUrlParser:true , useCreateIndex: true*/
}).then( () => {
    console.log('connection DB ok');
}).catch( err => {
    console.log(err);
})
