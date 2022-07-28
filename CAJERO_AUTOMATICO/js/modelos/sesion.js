const _SESION = {
  llave: '_SESION',
  inciar: (usuario, contrasena) => {
    let respuesta = false
    const cuentas = _CUENTAS.obtenerCuentas()
    for (let index = 0; index < cuentas.length; index++)
      if (
        cuentas[index].usuario == usuario &&
        cuentas[index].contrasena == contrasena
      ) {
        _SESION.crear(
          cuentas[index].id,
          cuentas[index].usuario,
          cuentas[index].nombre,
        )
        respuesta = true
        index = cuentas.length
        window.location.href = './home.html'
      }
    return respuesta
  },
  obtener: () => {
    return JSON.parse(window.localStorage.getItem(_SESION.llave))
  },
  validar: () => {
    let respuesta = null
    const cuentas = _CUENTAS.obtenerCuentas()
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
  crear: (id, usuario, nombre) => {
    const sesionUsr = {
      id,
      usuario,
      nombre,
    }
    window.localStorage.setItem(_SESION.llave, JSON.stringify(sesionUsr))
  },
}
