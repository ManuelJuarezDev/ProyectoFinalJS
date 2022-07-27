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

const _GN_SESION = _SESION.obtener()
const _GN_CUENTA = _CUENTAS.obtener(_GN_SESION.id)

const opcInicio = document.getElementById('opcInicio')
const opcConsultaSaldo = document.getElementById('opcConsultaSaldo')
const opcAbonar = document.getElementById('opcAbonar')
const opcRetirar = document.getElementById('opcRetirar')

const linkInicio = document.getElementById('linkInicio')
const linkConsultaSaldo = document.getElementById('linkConsultaSaldo')
const linkAbonar = document.getElementById('linkAbonar')
const linkRetirar = document.getElementById('linkRetirar')

linkInicio.addEventListener('click', (e) => {
  opcInicio.style.display = 'block'
  opcConsultaSaldo.style.display = 'none'
  opcAbonar.style.display = 'none'
  opcRetirar.style.display = 'none'
})

linkConsultaSaldo.addEventListener('click', (e) => {
  opcInicio.style.display = 'none'
  opcConsultaSaldo.style.display = 'block'
  opcAbonar.style.display = 'none'
  opcRetirar.style.display = 'none'
  opcCliente.inicio()
})

linkAbonar.addEventListener('click', (e) => {
  opcInicio.style.display = 'none'
  opcConsultaSaldo.style.display = 'none'
  opcAbonar.style.display = 'block'
  opcRetirar.style.display = 'none'
  //opcCliente.inicio()
})

linkRetirar.addEventListener('click', (e) => {
  opcInicio.style.display = 'none'
  opcConsultaSaldo.style.display = 'none'
  opcAbonar.style.display = 'none'
  opcRetirar.style.display = 'block'
  //opcCliente.inicio()
})

const opcCliente = {
  nomCliente: document.getElementById('consultaNomCliente'),
  consultaTablaMovimientos: document.getElementById('consultaTablaMovimientos'),
  consultaSaldoActual: document.getElementById('consultaSaldoActual'),
  inicio: () => {
    let saldo = 0
    let ingresos = 0
    let retiros = 0
    opcCliente.nomCliente.innerHTML = `${_GN_CUENTA.nombre}`
    opcCliente.consultaTablaMovimientos.innerHTML = ''

    _GN_CUENTA.movimientos.forEach((element, idx) => {
      if (element.tipo == 1) ingresos = ingresos + element.cantidad
      if (element.tipo == 2) retiros = retiros + element.cantidad
      const childElement = document.createElement('tr')
      childElement.innerHTML = `
          <td>${idx + 1}</td>
          <td>${element.tipo == 2 ? 'Retiro' : 'Abono'}</td>
          <td>${
            element.tipo == 2 ? element.cantidad * -1 : element.cantidad
          }</td>`
      opcCliente.consultaTablaMovimientos.appendChild(childElement)
    })
    saldo = ingresos - retiros
    opcCliente.consultaSaldoActual.innerHTML = saldo
  },
}

const inicio = () => {
  opcInicio.style.display = 'block'
  opcConsultaSaldo.style.display = 'none'
  opcAbonar.style.display = 'none'
  opcRetirar.style.display = 'none'

  const sesion = _SESION.obtener()
  const cuenta = _CUENTAS.obtener(sesion.id)
  let saldo = 0
  let ingresos = 0
  let retiros = 0
  cuenta.movimientos.forEach((element) => {
    if (element.tipo == 1) ingresos = ingresos + element.cantidad
    if (element.tipo == 2) retiros = retiros + element.cantidad
  })
  saldo = ingresos - retiros
  document.getElementById('titulo').innerHTML = `¡Bienvenido ${cuenta.nombre}!`
  document.getElementById('saldototal').innerHTML = `\$${saldo}`
  document.getElementById('saldoingreso').innerHTML = `\$${ingresos}`
  document.getElementById('saldoretiro').innerHTML = `\$${retiros}`
}

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
  },
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

const cerrarSesion = document.getElementById('cerrarsesion')

cerrarSesion.addEventListener('click', (e) => {
  _SESION.terminar()
})

if (_SESION.validar()) {
  inicio()
} else {
  mensaje.usuario('Sesión no válida')
  _SESION.terminar()
}
