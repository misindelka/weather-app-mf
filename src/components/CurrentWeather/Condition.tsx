import React from 'react'
import * as Cloud from '../../assets/cloud.jpg'

import './currentWeather.css'

interface IProps {
	weather: {
		id: number
		description: string
	}[]
}
const cloud = Cloud.default

export const Condition: React.FC<IProps> = ({ weather }) => {
	return (
		<div>
			{weather?.map(({ description, id }) => (
				<div key={id} className='current-condition'>
					<img src={cloud} alt='some' className='condition-icon' />
					<p className='condition-value'>{description}</p>
				</div>
			))}
		</div>
	)
}
