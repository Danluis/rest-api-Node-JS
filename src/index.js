const express = require('express')
const app = express();
const morgan = require('morgan')

//setwings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use(require('./routes/routerIndex'))
app.use('/api/movies',require('./routes/routerMovies'))

//starting the server
app.listen(3000, ()=>{
    console.log(`Server on port ${app.set('port')}`);

})