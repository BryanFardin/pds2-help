const Login = require('../models/LoginModel')

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.login()

        if(login.errors.length > 0){
            console.log('Error LoginController')
            return
        }
        return
    } catch(e) {
        console.log(e)
        return res.render('404')
    }
    
}
