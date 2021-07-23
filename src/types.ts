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

export interface IForecastList {
	clouds: { all: number }
	dt: number
	dt_txt: string

	main: {
		feels_like: number
		grnd_level: number
		humidity: number
		pressure: number
		sea_level: number
		temp: number
		temp_kf: number
		temp_max: number
		temp_min: number
	}

	pop: number

	sys: { pod: string }

	visibility: number
	weather: IWeather[]

	wind: {
		deg: number
		gust: number
		speed: number
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
	cnt: number
	cod: string
	list: IForecastList[]
}
