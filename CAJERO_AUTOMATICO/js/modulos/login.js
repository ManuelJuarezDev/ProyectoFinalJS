if (_SESION.validar()) {
  window.location.href = './home.html'
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (
    !_SESION.inciar(event.target.usuario.value, event.target.password.value)
  ) {
    _GENERALES.mensaje('Usuario no válido')
  }
})
