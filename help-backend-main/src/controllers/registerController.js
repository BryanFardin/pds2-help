const Register = require('../models/LoginModel')

exports.register = async (req, res) => {
    try {
        const register = new register(req.body)
        await register.register()

        if(register.errors.length > 0){
            console.log('Error RegisterController')
            return
        }
        return
    } catch(e) {
        console.log(e)
        return res.render('404')
    }
    
}