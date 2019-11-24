{
  var c = console.log

  Object.prototype.c = function (label) {
    console.log(typeof label == 'string' ? label + ':'
      : typeof label == 'number' ? label + '.' : '', this.valueOf())
    return this.valueOf()
  }
}

const { sign: jwtPack, verify } = require('jsonwebtoken')

const options = {
  expiresIn: 20,
  notBefore: 7
}

let jwt = jwtPack({data: 'Some string'}, 'Private key').c()

const jwtCheck =(jwt, key)=> { try { return verify(jwt, key) } catch {} }

c( jwtCheck(jwt, 'Private key') )
c( jwtCheck(jwt, 'Private kay') )




debugger