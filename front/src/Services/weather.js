/**
 * Utilidades
 */
import { api } from '../Utils/Constants'
import axios from 'axios'

/**
 * Weather Services
 */
const weather = {
  /**
   * Obtiene la locación actual
   */
  getLocation: async () => {
    try {
      const { data } = await axios.get(`${api}/location`)
      return data
    } catch (error) {
      console.log(error)
      return false
    }
  },

  /**
   * Obtiene la locacion actual y el clima.
   */
  getCurrent: async (city = null) => {
    try {
      const params = city !== null ? city : ''

      const { data } = await axios.get(`${api}/current/${params}`)
      return data
    } catch (error) {
      console.log(error)
      return false
    }
  },

  /**
   * Obtiene la locacion actual y el clima extendido.
   */
  getForecast: async (city = null) => {
    try {
      const params = city !== null ? city : ''

      const { data } = await axios.get(`${api}/forecast/${params}`)

      return data
    } catch (error) {
      console.log(error)
      return false
    }
  },
}

export default weather
