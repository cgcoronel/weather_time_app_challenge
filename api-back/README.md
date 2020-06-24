# REST API Weather Time

La siguiente es un ejemple de API Rest en Node.js, para la consulta de la ubicación actual (teniendo en cuenta una ip) y el estado del clima en los próximos 5 días.


## Instalar

	npm install

## Iniciar app 

	npm start

## Iniciar desde  Docker

	npm run docker:build
	npm run docker:start

## Correr tests
	 
	npm test

# REST API


La API REST para la aplicación de ejemplo se describe a continuación.

## Retornar ubicación actual

### Request

`GET /location`

	curl -i -H 'Accept: application/json' http://localhost:3977/v1/location

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method
	Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
	Allow: GET, POST, OPTIONS, PUT, DELETE
	Content-Type: application/json; charset=utf-8
	Content-Length: 23
	ETag: W/"17-6YQPNMkb6b/D0yidqyJWmFOJXE0"
	Date: Mon, 22 Jun 2020 02:21:52 GMT
	Connection: keep-alive

	{"city":"Buenos Aires"}

## Retornar ubicación y el estado del clima actual

### Request

`GET /current/`

    curl -i -H 'Accept: application/json' http://localhost:3977/v1/current

### Response

	TTP/1.1 200 OK
	X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method
	Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
	Allow: GET, POST, OPTIONS, PUT, DELETE
	Content-Type: application/json; charset=utf-8
	Content-Length: 504
	ETag: W/"1f8-uEiftsXF5H7mSbxcSYKh7CiNurc"
	Date: Mon, 22 Jun 2020 02:28:02 GMT
	Connection: keep-alive

	{
	  "city": "Buenos Aires",
	  "weather": {
	    "coord": { "lon": -58.38, "lat": -34.61 },
	    "weather": [
	      { "id": 804, "main": "Clouds", "description": "nubes", "icon": "04n" }
	    ],
	    "base": "stations",
	    "main": {
	      "temp": 284.92,
	      "feels_like": 282.1,
	      "temp_min": 284.26,
	      "temp_max": 286.15,
	      "pressure": 1019,
	      "humidity": 66
	    },
	    "visibility": 10000,
	    "wind": { "speed": 2.6, "deg": 170 },
	    "clouds": { "all": 100 },
	    "dt": 1592792737,
	    "sys": {
	      "type": 1,
	      "id": 8224,
	      "country": "AR",
	      "sunrise": 1592737225,
	      "sunset": 1592772620
	    },
	    "timezone": -10800,
	    "id": 3435910,
	    "name": "Buenos Aires",
	    "cod": 200
	  }

## Retornar ubicación especifica y el estado del clima actual

### Request

`GET /current/:city`

	curl -i -H 'Accept: application/json' http://localhost:3977/v1/current/Brooklyn

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method
	Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
	Allow: GET, POST, OPTIONS, PUT, DELETE
	Content-Type: application/json; charset=utf-8
	Content-Length: 501
	ETag: W/"1f5-Ov4vLPd/zF5dNVGVZr93Rw0UUQ4"
	Date: Mon, 22 Jun 2020 02:31:19 GMT
	Connection: keep-alive

	{
	  "city": "Brooklyn",
	  "weather": {
	    "coord": { "lon": -73.95, "lat": 40.65 },
	    "weather": [
	      {
	        "id": 800,
	        "main": "Clear",
	        "description": "cielo claro",
	        "icon": "01n"
	      }
	    ],
	    "base": "stations",
	    "main": {
	      "temp": 296.58,
	      "feels_like": 298.46,
	      "temp_min": 294.82,
	      "temp_max": 299.15,
	      "pressure": 1015,
	      "humidity": 73
	    },
	    "visibility": 16093,
	    "wind": { "speed": 1.5, "deg": 220 },
	    "clouds": { "all": 1 },
	    "dt": 1592792859,
	    "sys": {
	      "type": 1,
	      "id": 4610,
	      "country": "US",
	      "sunrise": 1592731505,
	      "sunset": 1592785815
	    },
	    "timezone": -14400,
	    "id": 5110302,
	    "name": "Brooklyn",
	    "cod": 200
	  }
	}





## Retornar ubicación y el estado del clima de los próximos 5 días

### Request

`GET /forecast/`

    curl -i -H 'Accept: application/json' http://localhost:3977/v1/forecast

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method
	Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
	Allow: GET, POST, OPTIONS, PUT, DELETE
	Content-Type: application/json; charset=utf-8
	Content-Length: 14789
	ETag: W/"39c5-uEd8ghaJ4lMZ4ZjhSiA2tLo5MCU"
	Date: Mon, 22 Jun 2020 02:50:15 GMT
	Connection: keep-alive

    {
        "city": "Buenos Aires",
        "weather": {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1592794800,
                    "main": {
                        "temp": 285.05,
                        "feels_like": 281.63,
                        "temp_min": 285.05,
                        "temp_max": 285.53,
                        "pressure": 1019,
                        "sea_level": 1020,
                        "grnd_level": 1015,
                        "humidity": 67,
                        "temp_kf": -0.48
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "nubes rotas",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 55
                    },
                    "wind": {
                        "speed": 3.57,
                        "deg": 157
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-06-22 03:00:00"
                },
                {
                    "dt": 1592805600,
                    "main": {
                        "temp": 284.91,
                        "feels_like": 282.2,
                        "temp_min": 284.91,
                        "temp_max": 285,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 1014,
                        "humidity": 70,
                        "temp_kf": -0.09
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "nubes rotas",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 81
                    },
                    "wind": {
                        "speed": 2.7,
                        "deg": 108
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-06-22 06:00:00"
                },
                {...}
            ],
            "city": {
                "id": 3435910,
                "name": "Buenos Aires",
                "coord": {
                    "lat": -34.6132,
                    "lon": -58.3772
                },
                "country": "AR",
                "population": 1000000,
                "timezone": -10800,
                "sunrise": 1592737225,
                "sunset": 1592772619
            }
        }
    }

## Retornar ubicación especifica y el estado del clima de los próximos 5  días

### Request

`GET /forecast/:city`

	curl -i -H 'Accept: application/json' http://localhost:3977/v1/forecast/Brooklyn

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method
	Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
	Allow: GET, POST, OPTIONS, PUT, DELETE
	Content-Type: application/json; charset=utf-8
	Content-Length: 14591
	ETag: W/"38ff-qWyZX3Q73xQsVTNFLcgYrLmYIgc"
	Date: Mon, 22 Jun 2020 03:04:57 GMT
	Connection: keep-alive

    {
        "city": "Brooklyn",
        "weather": {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1592805600,
                    "main": {
                        "temp": 296.11,
                        "feels_like": 296.5,
                        "temp_min": 295.81,
                        "temp_max": 296.11,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 1013,
                        "humidity": 77,
                        "temp_kf": 0.3
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "algo de nubes",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 23
                    },
                    "wind": {
                        "speed": 3.87,
                        "deg": 233
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-06-22 06:00:00"
                },
                {...}
            ],
            "city": {
                "id": 5110302,
                "name": "Brooklyn",
                "coord": {
                    "lat": 40.6501,
                    "lon": -73.9496
                },
                "country": "US",
                "population": 2300664,
                "timezone": -14400,
                "sunrise": 1592731505,
                "sunset": 1592785815
            }
        }
    }
