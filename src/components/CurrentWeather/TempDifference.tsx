import React from 'react'

interface IProps {
	temperature: {
		temp_max: number
		temp_min: number
	}
}

export const TempDifference: React.FC<IProps> = ({ temperature }) => {
	const maxTemp = (temperature?.temp_max - 273.15).toFixed()
	const minTemp = (temperature?.temp_min - 273.15).toFixed()
	return (
		<div className='temp-diff'>
			<div className='temp-diff-item'>
				{maxTemp} <span>&#8451;</span> <span >&#8593;</span>
			</div>
			<div className='temp-diff-item'>
				{minTemp} <span>&#8451;</span> <span>&#8595;</span>
			</div>
		</div>
	)
}
