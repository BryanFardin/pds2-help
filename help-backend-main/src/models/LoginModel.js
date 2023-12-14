const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body
    this.errors = []
    this.user = null
  }

  async login() {
    this.user = await LoginModel.findOne({id: this.body.id})

    if(!this.user) {
      this.errors.push('Usuario não existe')
      return
    }
    

    if(!bcryptjs.compareSync(this.body.password, this.user.password)){
      this.errors.push('Senha invalida')
      this.user = null
      return
    }
  }

}

module.exports = Login;