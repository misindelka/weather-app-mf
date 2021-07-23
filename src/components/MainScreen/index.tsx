import React, { useState, useEffect } from 'react'
import { Headings } from './Headings'
import { Row } from './Row'
import { CurrentWeather } from '../CurrentWeather'
import { Forecast } from '../Forecast'
import { Search } from '../Search'
import * as Image from '../../assets/bakground.jpg'
import { IWeatherData ,IForecastData} from '../../types'
import {initialForecastData,initialWeaterData,cities} from '../../constants'
import './main.css'

const image = Image.default

interface IProps {
	search: boolean
	apiData: IWeatherData
	forecastData: IForecastData
	city: string
}



export const MainScreen: React.FC = () => {
	const [search, setSearch] = useState<IProps['search']>(false)
	const [weather, setWeather] = useState<IProps['apiData']>(initialWeaterData)
	const [forecastData, setForecast] = useState<IProps['forecastData']>(initialForecastData)
	const [city, setCity] = useState<IProps['city']>('Košice')

	const apiKey: string = process.env.REACT_APP_API_KEY as string
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

	const weatherError =(err: any) => {
		throw new Error('Weather data fail!')
	}

	const forecastError =(err: any) => {
		throw new Error('Forecast data fail!')
	}

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




	return (
		<div className='main-wrapper'>
			<img src={image} alt='some' className='main-image' />
			{!search ? (
				<div className='panel'>
					<Headings
						search={search}
						setSearch={setSearch}
						city={city}
					/>
					<CurrentWeather apiData={weather} />
					<Row apiData={weather} />
					<Forecast forecastData={forecastData} />
				</div>
			) : (
				<div className='search-panel'>
					<Search cities={cities} />
				</div>
			)}
		</div>
	)
}





