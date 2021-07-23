export const cities = [
	{ id: 1, name: 'Bratislava', temp: 29 },
	{ id: 2, name: 'Humenné', temp: 28 },
	{ id: 3, name: 'Koromľa', temp: 26 },
	{ id: 4, name: 'Košice', temp: 31 },
	{ id: 5, name: 'Michalovce', temp: 26 },
	{ id: 6, name: 'Sobrance', temp: 26 },
]

export const initialWeaterData = {
	base: '',
	clouds: {
		all: 0,
	},
	cod: 0,
	coord: {
		lon: 0,
		lat: 0,
	},
	dt: 0,
	id: 0,
	main: {
		feels_like: 0,
		humidity: 0,
		pressure: 0,
		temp: 0,
		temp_max: 0,
		temp_min: 0,
	},
	name: '',
	sys: {
		country: '',
		id: 0,
		sunrise: 0,
		sunset: 0,
		type: 0,
	},
	timezone: 0,
	visibility: 0,
	weather: [],
	wind: {
		speed: 0,
		deg: 0,
	},
}

export const initialForecastData = {
	city: {
		country: '',
		id: 0,
		name: '',
		population: 0,
		sunrise: 0,
		sunset: 0,
		timezone: 0,
	},
	coord: {
		lon: 0,
		lat: 0,
	},
	dt: 0,
	id: 0,
	main: {
		feels_like: 0,
		humidity: 0,
		pressure: 0,
		temp: 0,
		temp_max: 0,
		temp_min: 0,
	},
	name: '',
	sys: {
		country: '',
		id: 0,
		sunrise: 0,
		sunset: 0,
		type: 0,
	},
	timezone: 0,
	visibility: 0,
	weather: [],
	wind: {
		speed: 0,
		deg: 0,
	},
}
