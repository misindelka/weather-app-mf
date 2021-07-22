import React from 'react';
import { ForecastCard } from './ForecastCard';

import './forecast.css';

export const Forecast = () => {
	return (
		<div className='forecast'>
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
		</div>
	);
};
