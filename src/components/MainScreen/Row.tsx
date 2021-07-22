import React from 'react'

import './main.css'

import * as Humidity from '../../assets/humidity.jpg'
import * as Presure from '../../assets/barometer.jpg'
import * as Wind from '../../assets/wind.jpg'
import * as Sunrise from '../../assets/sunrise.jpg'
import * as Sunset from '../../assets/sunset.jpg'
import * as Daytime from '../../assets/sand-clock.jpg'
import moment from 'moment'

const humidityImg = Humidity.default
const PresureImg = Presure.default
const WindImg = Wind.default
const SunriseImg = Sunrise.default
const SunsetImg = Sunset.default
const DaytimeImg = Daytime.default

interface RowProps {
	apiData: any
}

export const Row: React.FC<RowProps> = ({ apiData }) => {
	const sunrise = moment(apiData.sys?.sunrise).format('h:mm')
	const sunset = moment(apiData.sys?.sunset).format('h:mm')

	return (
		<div className='row'>
			<div className='row-card'>
				<img src={humidityImg} alt='some' className='card-icon' />
				<p className='card-value'>{apiData.main?.humidity}%</p>
				<p className='card-title'>Humidity</p>
			</div>

			<div className='row-card'>
				<img src={PresureImg} alt='some' className='card-icon' />
				<p className='card-value'>{apiData.main?.pressure}mBar</p>
				<p className='card-title'>Pressure</p>
			</div>

			<div className='row-card'>
				<img src={WindImg} alt='some' className='card-icon' />
				<p className='card-value'>{apiData.wind?.speed}km/h</p>
				<p className='card-title'>Wind</p>
			</div>

			<div className='row-card'>
				<img src={SunriseImg} alt='some' className='card-icon' />
				<p className='card-value'>{sunrise}AM </p>
				<p className='card-title'>Sunrise</p>
			</div>

			<div className='row-card'>
				<img src={SunsetImg} alt='some' className='card-icon' />
				<p className='card-value'>{sunset} PM</p>
				<p className='card-title'>Sunset</p>
			</div>

			<div className='row-card'>
				<img src={DaytimeImg} alt='some' className='card-icon' />
				<p className='card-value'>
					{moment(apiData.coord?.dt).format('hh:mm')}{' '}
				</p>
				<p className='card-title'>Daytime</p>
			</div>
		</div>
	)
}
