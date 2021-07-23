import React from 'react'
import { IForecastData } from '../../types'

import './forecast.css'

import * as Sunny from '../../assets/sunny.jpg'
import * as Cloudy from '../../assets/cloudy.jpg'
import * as Rainy from '../../assets/rainy.jpg'

interface IForecastProps {
	forecastData: IForecastData
}

const SunnyImg = Sunny.default
const CloudyImg = Cloudy.default
const RainyImg = Rainy.default

export const Forecast: React.FC<IForecastProps> = ({ forecastData }) => {
	const data = forecastData.list?.map((item: any) => item).slice(0, 3)

	const options: any = { weekday: 'short', day: 'numeric' }

	return (
		<div className='forecast'>
			{data?.map((day: any) => (
				<div key={day.dt} className='forecast-card'>
					<img src={SunnyImg} alt='some' className='forecast-icon' />
					<div className='forecast-date'>
						{new Date(day.dt).toLocaleDateString(
							undefined,
							options
						)}
					</div>
					<div className='temp-wrapper'>
						<p>
							{(day.main.temp_max - 273.15).toFixed()}
							<span>&#8451;</span>
							<span>&#8593;</span>
						</p>
						<p>
							{(day.main.temp_min - 273.15).toFixed()}
							<span>&#8451;</span> <span>&#8595;</span>
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
