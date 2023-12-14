const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')

const RegisterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  password: { type: String, required: true }
});

const RegisterModel = mongoose.model('Register', RegisterSchema);

class Register {
  constructor(body){
    this.body = body
    this.errors = []
    this.user = null
  }

  async register () {

    await this.userExists()

    if(this.errors.length > 0) return

    const salt = bcryptjs.genSaltSync()
    this.body.password = bcryptjs.hashSync(this.body.password, salt)

    this.user = await RegisterModel.create(this.body)
    
  }

  async userExists() {
    this.user = await RegisterModel.findOne({id: this.body.id})
    if(this.user) this.errors.push('Usuário ja existe.')
  }


}

module.exports = Register;