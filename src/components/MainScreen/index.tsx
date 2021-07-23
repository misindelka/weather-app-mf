import React, { useState, useEffect } from 'react'
import { Headings } from './Headings'
import { Row } from './Row'
import { CurrentWeather } from '../CurrentWeather'
import { Forecast } from '../Forecast'
import { Search } from '../Search'
import { IWeatherData, IForecastData } from '../../types'
import { initialForecastData, initialWeaterData } from '../../constants'
import './main.css'

interface IProps {
	search: boolean
	apiData: IWeatherData
	forecastData: IForecastData
	city: string
}

export const MainScreen: React.FC = () => {
	const [search, setSearch] = useState<IProps['search']>(false)
	const [weather, setWeather] = useState<IProps['apiData']>(initialWeaterData)
	const [forecastData, setForecast] = useState<IProps['forecastData']>(
		initialForecastData
	)
	const [city, setCity] = useState<IProps['city']>('Košice')

	const apiKey: string = process.env.REACT_APP_API_KEY as string
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

	useEffect(() => {
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((data) => setWeather(data))
			.catch(weatherError)
	}, [weatherUrl])

	useEffect(() => {
		fetch(forecastUrl)
			.then((res) => res.json())
			.then((data) => setForecast(data))
			.catch(forecastError)
	}, [forecastUrl])

	const weatherError = () => {
		console.log('Weather data fail!')
	}

	const forecastError = () => {
		console.log('Forecast data fail!')
	}

	const handleChageCurrentCity = (name: any): void => {
		setCity(name)
		setSearch(!search)
	}

	return (
		<div className='main-wrapper'>
			<div className='main-image' />
			{!search ? (
				<div className='panel'>
					<Headings
						search={search}
						setSearch={setSearch}
						city={city}
					/>
					<CurrentWeather weatherData={weather} />
					<Row weatherData={weather} />
					<Forecast forecastData={forecastData} />
				</div>
			) : (
				<div className='search-panel'>
					<Search handleChangeCurrentCity={handleChageCurrentCity} />
				</div>
			)}
		</div>
	)
}
