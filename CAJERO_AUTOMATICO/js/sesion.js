const _SESION = {
  llave: '_SESION',
  inciar: (usuario, contrasena) => {
    let respuesta = false
    const cuentas = JSON.parse(window.localStorage.getItem('_CUENTAS'))
    for (let index = 0; index < cuentas.length; index++)
      if (
        cuentas[index].usuario == usuario &&
        cuentas[index].contrasena == contrasena
      ) {
        _SESION.crear(cuentas[index].id)
        respuesta = true
        index = cuentas.length
        window.location.href = './inicio.html'
      }
    return respuesta
  },
  obtener: () => {
    return  JSON.parse(window.localStorage.getItem(_SESION.llave))
  },
  validar: () => {
    let respuesta = null
    const cuentas = JSON.parse(window.localStorage.getItem('_CUENTAS'))
    const sesionUsuario = JSON.parse(window.localStorage.getItem(_SESION.llave))
    if (sesionUsuario && typeof sesionUsuario == 'object') {
      if (sesionUsuario.hasOwnProperty('id'))
        for (let index = 0; index < cuentas.length; index++)
          if (cuentas[index].id == parseInt(sesionUsuario.id)) {
            index = cuentas.length
            respuesta = true
          }
    }
    return respuesta
  },
  terminar: () => {
    window.localStorage.removeItem(_SESION.llave)
    window.location.href = './login.html'
  },
  crear: (id) => {
    const sesionUsr = {
      id,
    }
    window.localStorage.setItem(_SESION.llave, JSON.stringify(sesionUsr))
  },
}
