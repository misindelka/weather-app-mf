import React from 'react'
import { Condition } from './Condition'
import { CurrentTemperature } from './CurrentTemperature'
import { TempDifference } from './TempDifference'
import { IWeatherData } from '../../types'

import './currentWeather.css'

interface IProps {
	weatherData: IWeatherData
}

export const CurrentWeather: React.FC<IProps> = ({ weatherData }) => {
	const weather = weatherData.weather
	const temperature = weatherData.main

	return (
		<div className='current-weather'>
			<Condition weather={weather} />
			<CurrentTemperature temperature={temperature} />
			<TempDifference temperature={temperature} />
		</div>
	)
}
