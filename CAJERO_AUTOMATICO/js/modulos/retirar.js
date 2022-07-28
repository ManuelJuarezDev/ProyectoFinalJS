const forumularioRetirar = document.getElementById('forumularioRetirar')
const cantidadRetirar = document.getElementById('cantidadRetirar')

forumularioRetirar.addEventListener('submit', (event) => {
  event.preventDefault()
  const monto = parseInt(event.target.cantidadRetirar.value)
  if (isNaN(monto) || monto <= 0) {
    _GENERALES.mensaje('Favor de ingresar monto válido')
  } else {
    if (_CUENTAS.movimiento(_SESION.obtener().id, monto * -1)) {
      refrescarSaldo()
      _GENERALES.mensaje(
        `Tu nuevo saldo es: \$${_CUENTAS.obtenerPorID(_SESION.obtener().id).saldo}`,
      )
      event.target.cantidadRetirar.value = ''
    }
  }
})

const _opcRetirar = () => {
  refrescarSaldo()
  document.getElementById('opcRetirar').style.display = 'block'
  document.getElementById('cantidadRetirar').value = ''
  cantidadRetirar.focus();
}
