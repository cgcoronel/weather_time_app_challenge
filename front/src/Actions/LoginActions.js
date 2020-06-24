// Acciones
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

/**
 * Acción de login.
 */
export const Login = user => ({
  type: LOGIN,
  payload: user,
})

/**
 * Acción de logout.
 */
export const Logout = () => ({
  type: LOGOUT,
})
