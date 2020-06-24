// Acciones
export const PROFILES_PREPARE_PROFILE_FOR_EDIT = 'PREPARE_PROFILE_FOR_EDIT'
export const PROFILES_PREPARE_PROFILE_FOR_VIEW = 'PREPARE_PROFILE_FOR_VIEW'
export const PROFILES_CHANGE_MODE = 'PROFILES_CHANGE_MODE'
export const PROFILES_CLEAR_FORM = 'PROFILES_CLEAR_FORM'

/**
 * Disponibiliza un perfil para su edición.
 */
export const PrepareProfileForEdit = profile => ({
  type: PROFILES_PREPARE_PROFILE_FOR_EDIT,
  payload: profile,
})

/**
 * Disponibiliza un perfil para su visualizaciòn.
 */
export const PrepareProfileForView = profile => ({
  type: PROFILES_PREPARE_PROFILE_FOR_VIEW,
  payload: profile,
})

/**
 * Cambia el modo de la pantalla de perfiles.
 */
export const ChangeMode = mode => ({
  type: PROFILES_CHANGE_MODE,
  payload: mode,
})

/**
 * Limpiamos el formulario.
 */
export const ClearForm = () => ({
  type: PROFILES_CLEAR_FORM,
})
