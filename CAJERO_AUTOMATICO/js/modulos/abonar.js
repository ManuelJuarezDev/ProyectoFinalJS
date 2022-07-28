const forumularioAbonar = document.getElementById('forumularioAbonar')

forumularioAbonar.addEventListener('submit', (event) => {
  event.preventDefault()
  const monto = parseInt(event.target.cantidadAbonar.value)
  if (isNaN(monto) || monto <= 0) {
    _GENERALES.mensaje('Favor de ingresar nibti válido')
  } else {
    if (_CUENTAS.movimiento(_SESION.obtener().id, monto)) {
      _GENERALES.mensaje(
        `Tu nuevo saldo es: ${_CUENTAS.obtener(_SESION.obtener().id).saldo}`,
      )
      event.target.cantidadAbonar.value = ''
    }
  }
})

const _opcAbonar = () => {
  document.getElementById('opcAbonar').style.display = 'block'
  document.getElementById('cantidadAbonar').value = ''
}
