const express = require('express');
const morgan = require('morgan')
const { mongoose } = require('./database')
const path = require('path')
const exphbs = require('express-handlebars')
const cors = require('cors')

//Inicializations
const appTask = express();
// const appUser = express();

//Settings
appTask.set('port', process.env.PORT || 3000);
appTask.set('views', path.join(__dirname, 'views'))
// appUser.set('port', process.env.PORT || 3001);
// appUser.set('views', path.join(__dirname, 'views'))


//Middlewares:
appTask.use(cors())
appTask.use(morgan('dev'))
appTask.use(express.json());
// appUser.use(morgan('dev'))
// appUser.use(express.json());

//Global Variables

//Routes
appTask.use(require('./routes/task.routes'))
// appUser.use(require('./routes/user.routes'))

//Static Files

//Server is listening
appTask.listen(appTask.get('port'), () => {
    console.log('Server on port', appTask.get('port'));
})
// appUser.listen(appUser.get('port'), () => {
    // console.log('Server on port', appUser.get('port'));
// })