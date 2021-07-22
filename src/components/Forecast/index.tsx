import React from 'react'

import './forecast.css'

interface ForecastProps {
	forecastData: any
}



export const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {

	const icon = 'icon'
	const data = forecastData.list?.map((item:any,) => item).slice(0, 3)

	const options:any = { weekday: 'short',  day: 'numeric' }
   


	console.log(forecastData)
	return (
		<div className='forecast'>
			{data?.map((day:any,) => (
				<div key={day.id} className='forecast-card'>
					<div className='forecast-icon'>{icon}</div>
					<div className='forecast-date'>{new Date(day.dt).toLocaleDateString(undefined, options)}</div>
					<div className='temp-wrapper'>
						<p>{(day.main.temp_max - 273.15).toFixed()}C</p>
						<p>{(day.main.temp_min - 273.15).toFixed()}C</p>
					</div>
				</div>
			))}
		</div>
	)
}
