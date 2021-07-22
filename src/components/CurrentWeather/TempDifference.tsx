import React from 'react'

interface IProps {
	temperature: {
		temp_max: number
		temp_min: number
	}
}

export const TempDifference: React.FC<IProps> = ({ temperature }) => {
	const maxTemp = (temperature?.temp_max - 273.15).toFixed();
	const minTemp = (temperature?.temp_min - 273.15).toFixed();
	return (
		<div className='temp-diff'>
			<p>{minTemp} C</p>
			<p>{maxTemp} C</p>
		</div>
	)
}
