import React from 'react';
import { Condition } from './Condition';
import { CurrentTemperature } from './CurrentTemperature';
import { TempDifference } from './TempDifference';

import './currentWeather.css';

interface IProps {
    apiData:any
}

export const CurrentWeather: React.FC<IProps> = ({apiData}) => {
       const weather = apiData.weather 
       const temperature = apiData.main	
    

	return (
		<div className='current-weather'>
			<Condition  weather={weather}/>
			<CurrentTemperature  temperature={temperature}/>
			<TempDifference temperature={temperature}/>
		</div>
	);
};
