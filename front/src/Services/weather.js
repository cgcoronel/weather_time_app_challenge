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
  getCurrent: async data => {
    try {
      const params = ''

      const { data } = await axios.get(`${api}/current`)

      return data
    } catch (error) {
      console.log(error)
      return false
    }
  },

  /**
   * Obtiene la locacion actual y el clima extendido.
   */
  getForecast: async data => {
    try {
      const params = ''

      const { data } = await axios.get(`${api}/forecast`)

      return data
    } catch (error) {
      console.log(error)
      return false
    }
  },
}

export default weather
