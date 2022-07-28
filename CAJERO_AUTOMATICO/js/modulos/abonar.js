const forumularioAbonar = document.getElementById('forumularioAbonar')
const cantidadAbonar = document.getElementById('cantidadAbonar')

forumularioAbonar.addEventListener('submit', (event) => {
  event.preventDefault()
  const monto = parseInt(event.target.cantidadAbonar.value)
  if (isNaN(monto) || monto <= 0) {
    _GENERALES.mensaje('Favor de ingresar monto válido')
  } else {
    if (_CUENTAS.movimiento(_SESION.obtener().id, monto)) {
      refrescarSaldo()
      _GENERALES.mensaje(
        `Tu nuevo saldo es: \$${_CUENTAS.obtenerPorID(_SESION.obtener().id).saldo}`,
      )
      event.target.cantidadAbonar.value = ''
    }
  }
})

const _opcAbonar = () => {
  refrescarSaldo()
  document.getElementById('opcAbonar').style.display = 'block'
  cantidadAbonar.value = ''
  cantidadAbonar.focus();
}