// Dependencias
import React from 'react'

// Estilo
import './scss/styles.scss'

/**
 * Renderizador de la cabecera.
 */
const Aside = () => (
  <div className="card mt-5">
    <div className="card-body">
      <h4 className="card-title text-left mb-5">Pronostico extendido de Buenos Aires</h4>

      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Lunes</label>
          <div className="col-sm-8 col-lg-10"> 15° Lluvia</div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Martes</label>
          <div className="col-sm-8 col-lg-10"> 15° Lluvia</div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Miercoles</label>
          <div className="col-sm-8 col-lg-10"> 15° Lluvia</div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Jueves</label>
          <div className="col-sm-8 col-lg-10"> 15° Lluvia</div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Viernes</label>
          <div className="col-sm-8 col-lg-10"> 15° Lluvia</div>
        </div>
      </form>
    </div>
  </div>
)

export default Aside
