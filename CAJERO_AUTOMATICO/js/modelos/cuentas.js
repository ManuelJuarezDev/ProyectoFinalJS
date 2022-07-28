const _CUENTAS = {
  llave: '_CUENTAS',
  MONTO_MINIMO: 10,
  MONTO_MAXIMO: 990,
  data: [
    {
      id: 1,
      cuenta: 123984324658,
      nombre: 'Maria Lizeth Lizarraga',
      usuario: 'Mali',
      contrasena: '123',
      saldo: 200,
    },
    {
      id: 2,
      cuenta: 68761354987,
      nombre: 'Gerardo de Jesús Vazquez',
      usuario: 'Gera',
      contrasena: '123',
      saldo: 220,
    },
    {
      id: 3,
      cuenta: 987613254468,
      nombre: 'Martha Urias Inzunza',
      usuario: 'Maui',
      contrasena: 'maui123',
      saldo: 67,
    },
  ],
  obtenerCuentas: () => {
    let respuesta = [];
    const cuesntasUsuario = JSON.parse(window.localStorage.getItem('_CUENTAS'))    
    if (cuesntasUsuario && typeof cuesntasUsuario == 'object')
        respuesta =cuesntasUsuario;
    return respuesta;
  },
  crear: () => {
    window.localStorage.setItem(_CUENTAS.llave, JSON.stringify(_CUENTAS.data))
  },
  obtenerPorID: (id) => {
    let respuesta = null
    const cuentasUsarios = _CUENTAS.obtenerCuentas();
    if (cuentasUsarios && typeof cuentasUsarios == 'object')
      if (cuentasUsarios.length > 0)
        for (let index = 0; index < cuentasUsarios.length; index++)
          if (cuentasUsarios[index].id == id) {
            respuesta = {
              id: cuentasUsarios[index].id,
              nombre: cuentasUsarios[index].nombre,
              saldo: cuentasUsarios[index].saldo,
              movimientos: cuentasUsarios[index].movimientos,
            }
            index = cuentasUsarios.length
          }
    return respuesta
  },
  eliminar: () => {
    window.localStorage.removeItem(_CUENTAS.llave)
  },
  movimiento: (id, monto) => {
    let respuesta = false
    let saldo = _CUENTAS.obtenerPorID(id).saldo
    const nuevoSaldo = parseInt(saldo) + monto
    if (
      nuevoSaldo >= _CUENTAS.MONTO_MINIMO &&
      nuevoSaldo <= _CUENTAS.MONTO_MAXIMO
    ) {
      let cuentasUsarios = _CUENTAS.obtenerCuentas();
      for (let index = 0; index < cuentasUsarios.length; index++) {
        if (cuentasUsarios[index].id == id) {
          cuentasUsarios[index].saldo = nuevoSaldo
          respuesta = true
        }
      }
      window.localStorage.setItem(
        _CUENTAS.llave,
        JSON.stringify(cuentasUsarios),
      )
    } else {
      alert(
        `El movimiento no es posible, ya que se supera el rango entre \$${_CUENTAS.MONTO_MINIMO} y  \$${_CUENTAS.MONTO_MAXIMO}  `,
      )
    }
    return respuesta;
  },
}
