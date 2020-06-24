/**
 * Utilidades
 */
import Requests from '../Utils/Requests'
import { api } from '../Utils/Constants'

/**
 * Weather Services
 */
const weather = {
  /**
   * Obtiene la locación actual
   */
  getLocation: async () => {
    try {
      return await Requests.get(`${api}/location`)
    } catch (error) {
      return false
    }
  },

  /**
   * Obtiene la locacion actual y el clima.
   */
  getCurrent: async data => {
    try {
      const params = ''
      return await Requests.get(`${api}/current/${params}`)
    } catch (error) {
      return false
    }
  },

  /**
   * Obtiene la locacion actual y el clima extendido.
   */
  getForecast: async data => {
    try {
      const params = ''
      return await Requests.get(`${api}/forecast/${params}`)
    } catch (error) {
      return false
    }
  },
}

export default weather
