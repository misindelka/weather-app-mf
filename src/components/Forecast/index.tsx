import React from 'react'
import { IForecastData } from '../../types'

import './forecast.css'

interface IForecastProps {
	forecastData: IForecastData
}

export const Forecast: React.FC<IForecastProps> = ({ forecastData }) => {
	const icon = 'icon'
	const data = forecastData.list?.map((item: any) => item).slice(0, 3)

	const options: any = { weekday: 'short', day: 'numeric' }

	return (
		<div className='forecast'>
			{data?.map((day: any) => (
				<div key={day.dt} className='forecast-card'>
					<div className='forecast-icon'>{icon}</div>
					<div className='forecast-date'>
						{new Date(day.dt).toLocaleDateString(
							undefined,
							options
						)}
					</div>
					<div className='temp-wrapper'>
						<p>{(day.main.temp_max - 273.15).toFixed()}C</p>
						<p>{(day.main.temp_min - 273.15).toFixed()}C</p>
					</div>
				</div>
			))}
		</div>
	)
}
