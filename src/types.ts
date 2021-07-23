export interface IWeather {
	description: string
	icon: string
	id: number
	main: string
}

export interface IWeatherData {
	base: string
	clouds: {
		all: number
	}
	cod: number
	coord: {
		lon: number
		lat: number
	}
	dt: number
	id: number
	main: {
		feels_like: number
		humidity: number
		pressure: number
		temp: number
		temp_max: number
		temp_min: number
	}
	name: string
	sys: {
		country: string
		id: number
		sunrise: number
		sunset: number
		type: number
	}
	timezone: number
	visibility: number
	weather: IWeather[]
	wind: {
		speed: number
		deg: number
	}
}

export interface IForecastData {
	city: {
		country: string
		id: number
		name: string
		population: number
		sunrise: number
		sunset: number
		timezone: number
	}
	coord: {
		lon: number
		lat: number
	}
	dt: number
	id: number
	main: {
		feels_like: number
		humidity: number
		pressure: number
		temp: number
		temp_max: number
		temp_min: number
	}
	name: string
	sys: {
		country: string
		id: number
		sunrise: number
		sunset: number
		type: number
	}
	timezone: number
	visibility: number
	weather: IWeather[]
	wind: {
		speed: number
		deg: number
	}
}
