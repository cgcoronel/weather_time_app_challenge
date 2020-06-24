// Acciones
export const USERS_PREPARE_USER_VIEW = 'USERS_PREPARE_USER_VIEW'
export const USERS_PREPARE_USER_EDIT = 'USERS_PREPARE_USER_EDIT'
export const USERS_CHANGE_MODE = 'USERS_CHANGE_MODE'
export const USERS_CLEAR_FORM = 'USERS_CLEAR_FORM'

/**
 * Modifica el modo de la pantalla de usuarios.
 */
export const ChangeMode = mode => ({
  type: USERS_CHANGE_MODE,
  payload: mode,
})

/**
 * Accion de logueo.
 */
export const PrepareUserForEdit = user => ({
  type: USERS_PREPARE_USER_EDIT,
  payload: user,
})

/**
 * Accion de logout.
 */
export const PrepareUserForView = user => ({
  type: USERS_PREPARE_USER_VIEW,
  payload: user,
})

/**
 * Limpiamos el formulario.
 */
export const ClearForm = () => ({
  type: USERS_CLEAR_FORM,
})
