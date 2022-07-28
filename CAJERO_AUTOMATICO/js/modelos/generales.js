const _GENERALES = {
  mensaje: (mensaje) => {
    document.getElementById(
      'memsajeGemeral',
    ).innerHTML = `<div class="modal fade" id="modalMensaje" tabindex="-1" aria-labelledby="modalMensaje" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Mensaje</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <span id="mensaje">${mensaje}</span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="confirmarModal" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>`
    $('#modalMensaje').modal('show')
  },
}
