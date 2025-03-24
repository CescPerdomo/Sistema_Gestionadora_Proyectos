"use client";

export default function Modal({ show, title, children, onClose, onConfirm }) {
  // Si show es false o undefined, no renderiza nada
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* Encabezado del modal */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          {/* Contenido principal */}
          <div className="modal-body">
            {children}
          </div>

          {/* Footer con botones */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
            {onConfirm && (
              <button type="button" className="btn btn-primary" onClick={onConfirm}>
                Confirmar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

