const mostrarOpcion = (opcion) => {
  if (!_SESION.validar()) {
    _GENERALES.mensaje('Sesión no válida')
    _SESION.terminar()
    return
  }
  document.querySelectorAll("div[name='vista']").forEach((item, idx) => {
    item.style.display = 'none'
  })
  switch (opcion) {
    case 'home':
      _opcHome()
      break
    case 'saldo':
      _opcInicio()
      break
    case 'abonar':
      _opcAbonar()
      break
    case 'retirar':
      _opcRetirar()
      break
    default:
      break
  }
}

const _opcHome = () => {
  document.getElementById('opcInicio').style.display = 'block'
  document.getElementById('titulo').innerHTML = `¡Bienvenido ${
    _SESION.obtener().nombre
  }!`
}

document.querySelectorAll("div[name='vista']").forEach((item, idx) => {
  item.style.display = 'none'
})
_opcHome()
