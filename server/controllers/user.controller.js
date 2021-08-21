const User = require('../model/user')
const userCtrl = {};

// userCtrl.getUser = async (req, res)=>{
//     const user = await User.findOne({email : {$eq: req.body.email}}, 
//         (err,doc)=>{
//             (err)? res.json({'status':'Usuario no encontrado'}):
//             ({password : {$eq: req.body.password}}?res.json(user):
//             res.json({'status':'Wrong Password'}))
//     })
// }



userCtrl.createUser = async (req, res)=>{
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'User saved'
    })
}

module.exports = userCtrl;