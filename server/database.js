const moongose = require ('mongoose')

const URI_TASK = "mongodb://localhost/tasks"
// const URI_USER = "mongodb://localhost/user"

// moongose.connect(URI_TASK && URI_USER)
moongose.connect(URI_TASK ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    UseFindAndModify: false
})
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));

moongose.connect('')