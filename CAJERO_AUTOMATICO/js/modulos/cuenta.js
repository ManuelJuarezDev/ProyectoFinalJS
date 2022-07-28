const _opcCuenta = () => {
  refrescarSaldo()
  document.getElementById('opcCuenta').style.display = 'block'
  document.getElementById('consultaCuenta').innerHTML = _SESION.obtener().cuenta;
  document.getElementById('consultaNombre').innerHTML = _SESION.obtener().nombre;
  document.getElementById('consultaUsuario').innerHTML = _SESION.obtener().usuario;
}