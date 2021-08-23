const moongose = require ('mongoose')

//Base de datos en línea
// const URI_TASK = "mongodb+srv://henrysalo:Exodo34$@henrysalo.neccw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Base de datos local
const URI_TASK = "mongodb://localhost/newtasks"

moongose.connect((URI_TASK),{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    UseFindAndModify: false
})
    .then(db => console.log("DB task is connected"))
    .catch(err => console.log(err));

moongose.connect('')