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

      //const { data } = await axios.get(`${api}/current/${params}`)

      // return data
      return jsonmock.current
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

      //const { data } = await axios.get(`${api}/forecast/${params}`)

      //return data
      return jsonmock.weather
    } catch (error) {
      console.log(error)
      return false
    }
  },
}

export default weather

const jsonmock = {
  current: {
    city: 'Buenos Aires',
    weather: {
      coord: {
        lon: -58.38,
        lat: -34.61,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      base: 'stations',
      main: {
        temp: 10.34,
        feels_like: 6.24,
        temp_min: 10,
        temp_max: 11,
        pressure: 1020,
        humidity: 50,
      },
      visibility: 10000,
      wind: {
        speed: 3.1,
        deg: 250,
      },
      clouds: {
        all: 0,
      },
      dt: 1593121726,
      sys: {
        type: 1,
        id: 8224,
        country: 'AR',
        sunrise: 1593082860,
        sunset: 1593118282,
      },
      timezone: -10800,
      id: 3435910,
      name: 'Buenos Aires',
      cod: 200,
    },
  },
  weather: {
    city: 'Buenos Aires',
    weather: {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1593129600,
          main: {
            temp: 10.34,
            feels_like: 5.13,
            temp_min: 10.33,
            temp_max: 10.34,
            pressure: 1020,
            sea_level: 1021,
            grnd_level: 1016,
            humidity: 49,
            temp_kf: 0.01,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'cielo claro',
              icon: '01n',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 4.63,
            deg: 230,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-26 00:00:00',
        },
        {
          dt: 1593140400,
          main: {
            temp: 9.8,
            feels_like: 5.35,
            temp_min: 9.65,
            temp_max: 9.8,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1016,
            humidity: 49,
            temp_kf: 0.15,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'cielo claro',
              icon: '01n',
            },
          ],
          clouds: {
            all: 9,
          },
          wind: {
            speed: 3.44,
            deg: 242,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-26 03:00:00',
        },
        {
          dt: 1593151200,
          main: {
            temp: 9.24,
            feels_like: 4.46,
            temp_min: 9.16,
            temp_max: 9.24,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1016,
            humidity: 51,
            temp_kf: 0.08,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04n',
            },
          ],
          clouds: {
            all: 51,
          },
          wind: {
            speed: 3.92,
            deg: 284,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-26 06:00:00',
        },
        {
          dt: 1593162000,
          main: {
            temp: 8.58,
            feels_like: 3.2,
            temp_min: 8.57,
            temp_max: 8.58,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1017,
            humidity: 54,
            temp_kf: 0.01,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'nubes dispersas',
              icon: '03n',
            },
          ],
          clouds: {
            all: 42,
          },
          wind: {
            speed: 4.81,
            deg: 277,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-26 09:00:00',
        },
        {
          dt: 1593172800,
          main: {
            temp: 8.3,
            feels_like: 3.13,
            temp_min: 8.3,
            temp_max: 8.3,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1019,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'nubes dispersas',
              icon: '03d',
            },
          ],
          clouds: {
            all: 26,
          },
          wind: {
            speed: 4.51,
            deg: 260,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-26 12:00:00',
        },
        {
          dt: 1593183600,
          main: {
            temp: 11.18,
            feels_like: 6.39,
            temp_min: 11.18,
            temp_max: 11.18,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1019,
            humidity: 44,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'cielo claro',
              icon: '01d',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 3.88,
            deg: 255,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-26 15:00:00',
        },
        {
          dt: 1593194400,
          main: {
            temp: 12.91,
            feels_like: 7.95,
            temp_min: 12.91,
            temp_max: 12.91,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1018,
            humidity: 40,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'cielo claro',
              icon: '01d',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 4.17,
            deg: 247,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-26 18:00:00',
        },
        {
          dt: 1593205200,
          main: {
            temp: 12.03,
            feels_like: 8.33,
            temp_min: 12.03,
            temp_max: 12.03,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1018,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 2.41,
            deg: 237,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-26 21:00:00',
        },
        {
          dt: 1593216000,
          main: {
            temp: 11.31,
            feels_like: 8.11,
            temp_min: 11.31,
            temp_max: 11.31,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1019,
            humidity: 46,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 1.76,
            deg: 239,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-27 00:00:00',
        },
        {
          dt: 1593226800,
          main: {
            temp: 10.25,
            feels_like: 6.99,
            temp_min: 10.25,
            temp_max: 10.25,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1020,
            humidity: 51,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 98,
          },
          wind: {
            speed: 1.94,
            deg: 203,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-27 03:00:00',
        },
        {
          dt: 1593237600,
          main: {
            temp: 9.27,
            feels_like: 5.73,
            temp_min: 9.27,
            temp_max: 9.27,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1019,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04n',
            },
          ],
          clouds: {
            all: 66,
          },
          wind: {
            speed: 2.26,
            deg: 153,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-27 06:00:00',
        },
        {
          dt: 1593248400,
          main: {
            temp: 8.56,
            feels_like: 5.14,
            temp_min: 8.56,
            temp_max: 8.56,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1019,
            humidity: 54,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algo de nubes',
              icon: '02n',
            },
          ],
          clouds: {
            all: 12,
          },
          wind: {
            speed: 2,
            deg: 156,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-27 09:00:00',
        },
        {
          dt: 1593259200,
          main: {
            temp: 8.27,
            feels_like: 4.88,
            temp_min: 8.27,
            temp_max: 8.27,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 1021,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algo de nubes',
              icon: '02d',
            },
          ],
          clouds: {
            all: 21,
          },
          wind: {
            speed: 1.96,
            deg: 136,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-27 12:00:00',
        },
        {
          dt: 1593270000,
          main: {
            temp: 10.25,
            feels_like: 6.99,
            temp_min: 10.25,
            temp_max: 10.25,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 1021,
            humidity: 50,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 90,
          },
          wind: {
            speed: 1.88,
            deg: 77,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-27 15:00:00',
        },
        {
          dt: 1593280800,
          main: {
            temp: 10.78,
            feels_like: 7.72,
            temp_min: 10.78,
            temp_max: 10.78,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 52,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 94,
          },
          wind: {
            speed: 1.82,
            deg: 55,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-27 18:00:00',
        },
        {
          dt: 1593291600,
          main: {
            temp: 10.26,
            feels_like: 7.05,
            temp_min: 10.26,
            temp_max: 10.26,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 58,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 89,
          },
          wind: {
            speed: 2.28,
            deg: 69,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-27 21:00:00',
        },
        {
          dt: 1593302400,
          main: {
            temp: 10.23,
            feels_like: 7.44,
            temp_min: 10.23,
            temp_max: 10.23,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1020,
            humidity: 62,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04n',
            },
          ],
          clouds: {
            all: 65,
          },
          wind: {
            speed: 1.91,
            deg: 45,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-28 00:00:00',
        },
        {
          dt: 1593313200,
          main: {
            temp: 9.89,
            feels_like: 6.79,
            temp_min: 9.89,
            temp_max: 9.89,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algo de nubes',
              icon: '02n',
            },
          ],
          clouds: {
            all: 21,
          },
          wind: {
            speed: 2.56,
            deg: 38,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-28 03:00:00',
        },
        {
          dt: 1593324000,
          main: {
            temp: 9.35,
            feels_like: 6.22,
            temp_min: 9.35,
            temp_max: 9.35,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1019,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04n',
            },
          ],
          clouds: {
            all: 53,
          },
          wind: {
            speed: 2.69,
            deg: 13,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-28 06:00:00',
        },
        {
          dt: 1593334800,
          main: {
            temp: 8.83,
            feels_like: 5.52,
            temp_min: 8.83,
            temp_max: 8.83,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1018,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04n',
            },
          ],
          clouds: {
            all: 73,
          },
          wind: {
            speed: 2.81,
            deg: 22,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-28 09:00:00',
        },
        {
          dt: 1593345600,
          main: {
            temp: 8.91,
            feels_like: 5.5,
            temp_min: 8.91,
            temp_max: 8.91,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1020,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04d',
            },
          ],
          clouds: {
            all: 84,
          },
          wind: {
            speed: 2.86,
            deg: 34,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-28 12:00:00',
        },
        {
          dt: 1593356400,
          main: {
            temp: 10.01,
            feels_like: 5.88,
            temp_min: 10.01,
            temp_max: 10.01,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 60,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.66,
            deg: 45,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-28 15:00:00',
        },
        {
          dt: 1593367200,
          main: {
            temp: 11.15,
            feels_like: 7.11,
            temp_min: 11.15,
            temp_max: 11.15,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1017,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.36,
            deg: 59,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-28 18:00:00',
        },
        {
          dt: 1593378000,
          main: {
            temp: 11.24,
            feels_like: 6.8,
            temp_min: 11.24,
            temp_max: 11.24,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1017,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 4.46,
            deg: 74,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-28 21:00:00',
        },
        {
          dt: 1593388800,
          main: {
            temp: 10.79,
            feels_like: 5.36,
            temp_min: 10.79,
            temp_max: 10.79,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1017,
            humidity: 68,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 99,
          },
          wind: {
            speed: 6.19,
            deg: 69,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-29 00:00:00',
        },
        {
          dt: 1593399600,
          main: {
            temp: 10.45,
            feels_like: 4.63,
            temp_min: 10.45,
            temp_max: 10.45,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1017,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 99,
          },
          wind: {
            speed: 6.59,
            deg: 70,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-29 03:00:00',
        },
        {
          dt: 1593410400,
          main: {
            temp: 10.04,
            feels_like: 4.58,
            temp_min: 10.04,
            temp_max: 10.04,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1017,
            humidity: 63,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 99,
          },
          wind: {
            speed: 5.74,
            deg: 62,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-29 06:00:00',
        },
        {
          dt: 1593421200,
          main: {
            temp: 9.55,
            feels_like: 4.14,
            temp_min: 9.55,
            temp_max: 9.55,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1016,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 5.89,
            deg: 81,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-29 09:00:00',
        },
        {
          dt: 1593432000,
          main: {
            temp: 10.05,
            feels_like: 3.68,
            temp_min: 10.05,
            temp_max: 10.05,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1016,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.51,
            deg: 94,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-29 12:00:00',
        },
        {
          dt: 1593442800,
          main: {
            temp: 11.44,
            feels_like: 4.8,
            temp_min: 11.44,
            temp_max: 11.44,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1016,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 8.03,
            deg: 94,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-29 15:00:00',
        },
        {
          dt: 1593453600,
          main: {
            temp: 11.89,
            feels_like: 4.96,
            temp_min: 11.89,
            temp_max: 11.89,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1014,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 89,
          },
          wind: {
            speed: 8.71,
            deg: 106,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-29 18:00:00',
        },
        {
          dt: 1593464400,
          main: {
            temp: 11.38,
            feels_like: 4,
            temp_min: 11.38,
            temp_max: 11.38,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1015,
            humidity: 73,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nubes rotas',
              icon: '04n',
            },
          ],
          clouds: {
            all: 83,
          },
          wind: {
            speed: 9.45,
            deg: 112,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-29 21:00:00',
        },
        {
          dt: 1593475200,
          main: {
            temp: 11.36,
            feels_like: 4.26,
            temp_min: 11.36,
            temp_max: 11.36,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1016,
            humidity: 72,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 91,
          },
          wind: {
            speed: 8.98,
            deg: 110,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-30 00:00:00',
        },
        {
          dt: 1593486000,
          main: {
            temp: 11.32,
            feels_like: 4.81,
            temp_min: 11.32,
            temp_max: 11.32,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1017,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 8.25,
            deg: 120,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-30 03:00:00',
        },
        {
          dt: 1593496800,
          main: {
            temp: 10.88,
            feels_like: 4.32,
            temp_min: 10.88,
            temp_max: 10.88,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1017,
            humidity: 77,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'lluvia ligera',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 8.37,
            deg: 135,
          },
          rain: {
            '3h': 0.31,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-30 06:00:00',
        },
        {
          dt: 1593507600,
          main: {
            temp: 10.03,
            feels_like: 3.1,
            temp_min: 10.03,
            temp_max: 10.03,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1017,
            humidity: 77,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'lluvia ligera',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 8.65,
            deg: 153,
          },
          rain: {
            '3h': 1.69,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-30 09:00:00',
        },
        {
          dt: 1593518400,
          main: {
            temp: 9.5,
            feels_like: 2.1,
            temp_min: 9.5,
            temp_max: 9.5,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'lluvia ligera',
              icon: '10d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 9,
            deg: 160,
          },
          rain: {
            '3h': 0.69,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-30 12:00:00',
        },
        {
          dt: 1593529200,
          main: {
            temp: 10.2,
            feels_like: 3.56,
            temp_min: 10.2,
            temp_max: 10.2,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 1021,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.82,
            deg: 165,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-30 15:00:00',
        },
        {
          dt: 1593540000,
          main: {
            temp: 9.88,
            feels_like: 3.47,
            temp_min: 9.88,
            temp_max: 9.88,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.69,
            deg: 170,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2020-06-30 18:00:00',
        },
        {
          dt: 1593550800,
          main: {
            temp: 9.17,
            feels_like: 3.22,
            temp_min: 9.17,
            temp_max: 9.17,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1021,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nubes',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 6.88,
            deg: 164,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-06-30 21:00:00',
        },
      ],
      city: {
        id: 3435910,
        name: 'Buenos Aires',
        coord: {
          lat: -34.6132,
          lon: -58.3772,
        },
        country: 'AR',
        population: 1000000,
        timezone: -10800,
        sunrise: 1593082860,
        sunset: 1593118281,
      },
    },
  },
}
