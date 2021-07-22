import React from 'react';
import { Headings } from './Headings';
import { Row } from './Row';
import { CurrentWeather } from '../CurrentWeather';
import { Forecast } from '../Forecast';
import * as Image from '../../assets/bakground.jpg';
import './main.css';

const image = Image.default;

export const MainScreen: React.FC = () => {
	return (
		<div className='main-wrapper'>
			<img src={image} alt='some' className='main-image' />
			<div className='panel'>
				<Headings />
				<CurrentWeather />
				<Row />
				<Forecast />
			</div>
		</div>
	);
};
