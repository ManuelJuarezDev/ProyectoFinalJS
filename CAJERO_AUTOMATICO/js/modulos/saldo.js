const _opcInicio = () => {
  document.getElementById('opcSaldo').style.display = 'block'
  document.getElementById('consultaUsuario').innerHTML = _SESION.obtener().usuario;
  document.getElementById('consultaNombre').innerHTML = _SESION.obtener().nombre;
  document.getElementById('consultaSaldoActual').innerHTML = `\$ ${_CUENTAS.obtener(_SESION.obtener().id).saldo}`;
}