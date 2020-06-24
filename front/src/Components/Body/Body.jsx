// Dependencias
import React from 'react'

// Estilo
import './scss/styles.scss'

/**
 * Renderizador de la cabecera.
 */
const Body = () => (
  <div className="card mt-5">
    <div className="card-body">
      <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
          <div className="col-sm-8 col-lg-10">
            <input type="text" className="form-control" placeholder="Nombre Mascota" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
          <div className="col-sm-8 col-lg-10">
            <input type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
          <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0"></div>

          <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
          <div className="col-sm-8 col-lg-4"></div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
          <div className="col-sm-8 col-lg-10"></div>
        </div>
        <div className="form-group row justify-content-end">
          <div className="col-sm-3">
            <button type="submit" className="btn btn-success w-100">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default Body
