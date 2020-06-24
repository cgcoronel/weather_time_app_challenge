/**
 * Utilidades
 */
import Requests from '../Utils/Requests'
import { Gateway } from '../Utils/Constants'

/**
 * Modelo de perfiles
 */
const ProfilesModel = {
  /**
   * Obtiene todos los perfiles.
   */
  getProfiles: async () => {
    try {
      return await Requests.get(`${Gateway}/profile`)
    } catch (error) {
      return false
    }
  },

  /**
   * Añade un nuevo perfil.
   */
  createProfile: async data => {
    try {
      return await Requests.post(`${Gateway}/profile`, data)
    } catch (error) {
      return false
    }
  },

  /**
   * Actualiza un perfil.
   */
  updateProfile: async data => {
    try {
      return await Requests.put(`${Gateway}/profile`, data)
    } catch (error) {
      return false
    }
  },

  /**
   * Elimina un perfil.
   */
  deleteProfile: async profileName => {
    try {
      return await Requests.delete(`${Gateway}/profile/` + profileName)
    } catch (error) {
      return null
    }
  },

  /**
   * Obtiene todos los perfiles.
   */
  searchProfiles: async filters => {
    try {
      return await Requests.get(`${Gateway}/profile`)
    } catch (error) {
      return false
    }
  },
}

export default ProfilesModel
