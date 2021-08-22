const moongose = require ('mongoose')

//Nombro la base de datos
const URI_TASK = "mongodb://localhost/newtasks"

moongose.connect((URI_TASK),{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    UseFindAndModify: false
})
    .then(db => console.log("DB task is connected"))
    .catch(err => console.log(err));

moongose.connect('')