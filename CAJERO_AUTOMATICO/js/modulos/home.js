const opcionesMenu =  document.querySelectorAll('.navbar-nav li');
const mostrarOpcion = (opcion) => {
  if (!_SESION.validar()) {
    _GENERALES.mensaje('Sesión no válida')
    _SESION.terminar()
    return false;
  }
  document.getElementById('saldo').style.display = 'block';
  document.querySelectorAll("article[name='vista']").forEach((item) => item.style.display = 'none')
  switch (opcion) {
    case 'home':
      _opcHome()
      break
    case 'cuenta':
      _opcCuenta()
      break
    case 'abonar':
      _opcAbonar()
      break
    case 'retirar':
      _opcRetirar()
      break
    default:
      _opcHome()
      break
  }
  return true;
}

const refrescarSaldo = () => {
  const _saldo = _CUENTAS.obtenerPorID(_SESION.obtener().id).saldo;
  const porcentaje = parseInt((_saldo * 100) / _CUENTAS.MONTO_MAXIMO)
  document.getElementById('consultaSaldoActual').innerHTML = `\$ ${_saldo}`;
  document.getElementById('limiteCuenta').innerHTML = `${porcentaje} %`;
}

const _opcHome = () => {
  document.getElementById('opcInicio').style.display = 'block'
  document.getElementById('saldo').style.display = 'none';
  document.getElementsByClassName('navbar-text')[0].innerHTML = `${_SESION.obtener().nombre}`
  document.getElementById('titulo').innerHTML = `¡Bienvenido ${
    _SESION.obtener().nombre
  }!`
  opcionesMenu.forEach((item, idx) => {
    item.addEventListener('click', (event) => {
      opcionesMenu.forEach((item2, idx) => {
        item2.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}

mostrarOpcion('home')

function change (){
  if(document.getElementById('icono').className=="fa fa-angle-down"){
    document.getElementById('icono').className = "fa fa-angle-up";
  }else{
    document.getElementById('icono').className = "fa fa-angle-down";
  }
}
