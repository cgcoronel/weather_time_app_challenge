// Acciones
export const FOODS_PREPARE_FOOD_FOR_EDIT = 'PREPARE_FOOD_FOR_EDIT'
export const FOODS_PREPARE_FOOD_FOR_VIEW = 'PREPARE_FOOD_FOR_VIEW'
export const FOODS_CHANGE_MODE = 'FOODS_CHANGE_MODE'
export const FOODS_CLEAR_FORM = 'FOODS_CLEAR_FORM'

/**
 * Disponibiliza un Plato para su edición.
 */
export const PrepareFoodForEdit = food => ({
  type: FOODS_PREPARE_FOOD_FOR_EDIT,
  payload: food,
})

/**
 * Disponibiliza un Plato para su visualizaciòn.
 */
export const PrepareFoodForView = food => ({
  type: FOODS_PREPARE_FOOD_FOR_VIEW,
  payload: food,
})

/**
 * Cambia el modo de la pantalla de Platos.
 */
export const ChangeMode = mode => ({
  type: FOODS_CHANGE_MODE,
  payload: mode,
})

/**
 * Limpiamos el formulario.
 */
export const ClearForm = () => ({
  type: FOODS_CLEAR_FORM,
})
