import React from 'react';

import './forecast.css';

export const ForecastCard = () => {
	return (
		<div className='forecast-card'>
			<div className='forecast-icon'>ICON</div>
			<div className='forecast-date'>THU, 28</div>
			<div className='temp-wrapper'>
				<p>23 C</p>
				<p>23 C</p>
			</div>
		</div>
	);
};
