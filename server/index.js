require('./database')
const express = require('express');
const morgan = require('morgan')

const path = require('path')
const cors = require('cors')

//Inicializations
const appTask = express();

//Settings
appTask.set('port', process.env.PORT || 3000);
appTask.set('views', path.join(__dirname, 'views'))

//Middlewares:
appTask.use(cors())
appTask.use(morgan('dev'))
appTask.use(express.json());

//Routes, siendo /api el valor anexo al puerto
// appTask.use("/api",require('./routes/task.routes'))
appTask.use("/",require('./routes/task.routes'))

//Server is listening
appTask.listen(appTask.get('port'), () => {
    console.log('Server on port', appTask.get('port'));
})