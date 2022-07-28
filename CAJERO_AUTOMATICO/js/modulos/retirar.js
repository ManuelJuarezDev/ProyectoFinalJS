const forumularioRetirar = document.getElementById('forumularioRetirar')

forumularioRetirar.addEventListener('submit', (event) => {
  event.preventDefault()
  const monto = parseInt(event.target.cantidadRetirar.value)
  if (isNaN(monto) || monto <= 0) {
    _GENERALES.mensaje('Favor de ingresar nibti válido')
  } else {
    if (_CUENTAS.movimiento(_SESION.obtener().id, monto * -1)) {
      _GENERALES.mensaje(
        `Tu nuevo saldo es: ${_CUENTAS.obtener(_SESION.obtener().id).saldo}`,
      )
      event.target.cantidadRetirar.value = ''
    }
  }
})

const _opcRetirar = () => {
  document.getElementById('opcRetirar').style.display = 'block'
  document.getElementById('cantidadRetirar').value = ''
}
