import React from 'react'
import { IForecastData, IForecastList } from '../../types'

import './forecast.css'

interface IForecastProps {
	forecastData: IForecastData
}

export const Forecast: React.FC<IForecastProps> = ({ forecastData }) => {
	const data = forecastData.list?.map((item: IForecastList) => item).slice(1, 4)

	const formatDate = (date: any) => {
		const milliseconds = date * 1000
		const dateObject = new Date(milliseconds)
		const dateFormat = dateObject.toLocaleString('en-US', {
			day: 'numeric',
			weekday: 'short',
		})
		return dateFormat
	}

	return (
		<div className='forecast'>
			{data?.map((day: IForecastList) => (
				<div key={day.dt} className='forecast-card'>
					{day.weather?.map(({ icon, id} ) => (
						<img key={id}
							src={`http://openweathermap.org/img/w/${icon}.png`}
							alt='some'
							className='forecast-icon'
						/>
					))}

					<div className='forecast-date'>{formatDate(day.dt)}</div>
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
