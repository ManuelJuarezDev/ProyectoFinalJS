const _CUENTAS = {
  llave: '_CUENTAS',
  data: [
    {
      id: 1,
      nombre: 'Maria Lizeth Lizarraga',
      usuario: 'Mali',
      contrasena: '123',
      movimientos: [{ tipo: 1, cantidad: 200 }],
    },
    {
      id: 2,
      nombre: 'Gerardo de Jesús Vazquez',
      usuario: 'Gera',
      contrasena: '123',
      contrasena2: 'gera_007!',
      movimientos: [
        { tipo: 1, cantidad: 200 },
        { tipo: 1, cantidad: 100 },
        { tipo: 2, cantidad: 10 },
        { tipo: 2, cantidad: 10 },
        { tipo: 1, cantidad: 1 },
      ],
    },
    {
      id: 3,
      nombre: 'Martha Urias Inzunza',
      usuario: 'Maui',
      contrasena: 'maui123',
      saldo: 67,
      movimientos: [{ tipo: 1, cantidad: 67 }],
    },
  ],
  crear: () => {
    const cuentas = _CUENTAS.data
    window.localStorage.setItem(_CUENTAS.llave, JSON.stringify(cuentas))
  },
  obtener: (id) => {
    let respuesta = null
    // const cuentasUsarios = JSON.parse(
    //   window.localStorage.getItem(_CUENTAS.llave),
    // )
    const cuentasUsarios =_CUENTAS.data;
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
}
