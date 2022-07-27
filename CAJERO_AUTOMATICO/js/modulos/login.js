if (_SESION.validar()) {
  window.location.href = './main.html'
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const usuario = event.target.usuario.value
  const contrasena = event.target.password.value

  if (!_SESION.inciar(usuario, contrasena)) {
     alert('Usuario no válido')
  }
  
})
