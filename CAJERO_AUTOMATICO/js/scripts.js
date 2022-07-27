// var cuentas = [
//     { 
//         id: 1,
//         nombre:'Maria Lizeth Lizarraga',
//         usuario:'Mali', 
//         contrasena:'M@l¡',
//         saldo: 200 
//     },
//     { 
//         id: 2,
//         nombre:'Gerardo de Jesús Vazquez',
//         usuario:'Gera', 
//         contrasena:'gera_007!',
//         saldo: 290 },
//     { 
//         id:3,
//         nombre:'Martha Urias Inzunza',
//         usuario:'Maui', 
//         contrasena:'maui123',
//         saldo: 67 
//     }
//   ];


const MONTO_MINIMO = 10
const MONTO_MAXIMO = 990
const MSJ_MONTO_MINIMO = `El saldo de tu cuenta debe de ser mayor a \$${MONTO_MINIMO}`
const MSJ_MONTO_MAXIMO = `El saldo de tu cuenta debe de ser menor a \$${MONTO_MAXIMO}`


const usuario = {
  indice: (idx) => {
    let respuesta = -1
    cuentas = _CUENTAS
    for (let index = 0; index < cuentas.length; index++) {
      if (cuentas[index].id == parseInt(idx)) {
        respuesta = index
        break
      }
    }
    return respuesta
  },
  informacion: (_id) => {
    let respuesta = null
    const cuentas = _CUENTAS
    const indice = usuario.indice(_id)
    if (indice >= 0) respuesta = cuentas[indice]
    return respuesta
  },
  saldo: (_id) => {
    let respuesta = 0
    const indice = usuario.indice(_id)
    if (indice >= 0) respuesta = parseInt(cuentas[indice].saldo)
    return respuesta
  },
  depositar: (_id, _monto) => {
    let respuesta = false
    let cuentas = _CUENTAS
    const indice = usuario.indice(_id)
    if (indice >= 0) {
      const nuevoSaldo = parseInt(cuentas[indice].saldo) + _monto
      if (usuario.reglaNegocio(nuevoSaldo)) {
        cuentas[indice].saldo = nuevoSaldo
        respuesta = true
      }
    }
    return respuesta
  },
  retirar: (_id, _monto) => {
    let respuesta = false
    cuentas = _CUENTAS
    const indice = usuario.indice(_id)
    if (indice >= 0) {
      const nuevoSaldo = parseInt(cuentas[indice].saldo) - _monto
      if (usuario.reglaNegocio(nuevoSaldo)) {
        cuentas[indice].saldo = nuevoSaldo
        respuesta = true
      }
    }
    return respuesta
  },
  reglaNegocio: (monto) => {
    let respuesta = false
    if (monto < MONTO_MINIMO) mensaje.usuario(MSJ_MONTO_MINIMO)
    else if (monto > MONTO_MAXIMO) mensaje.usuario(MSJ_MONTO_MAXIMO)
    else respuesta = true
  
    return respuesta
  }
  
}

const mensaje = {
  usuario: (mensaje) => {
    alert(mensaje)
  },
}

const login = {
  validar: (_user, _psw) => {
    bRespuesta = false
    let cuentas = _CUENTAS
    cuentas.forEach((usuario) => {
      if (usuario.usuario == _user && usuario.contrasena == _psw) {
        bRespuesta = true
      }
    })
    return bRespuesta
  },
}


// $('#myModal').modal({
//     keyboard: false
//   })


if (_SESION.validar()) {

}
else {
    mensaje.usuario('Sesión no válida')
    _SESION.terminar();
}

