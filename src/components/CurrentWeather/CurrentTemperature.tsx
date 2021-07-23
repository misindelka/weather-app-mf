import React from 'react'

interface IProps {
	temperature: {
		temp: number
	}
}

export const CurrentTemperature: React.FC<IProps> = ({ temperature }) => {
	const currentTemp = (temperature?.temp - 273.15).toFixed()

	return (
		<div className='temperature'>
			<div className='temperature-value'>{currentTemp}<span className='span-letter'>&#8451;</span></div>
		</div>
	)
}
