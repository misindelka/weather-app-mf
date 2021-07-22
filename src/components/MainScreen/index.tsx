import React, { useState ,useEffect} from 'react';
import { Headings } from './Headings';
import { Row } from './Row';
import { CurrentWeather } from '../CurrentWeather';
import { Forecast } from '../Forecast';
import { Search } from '../Search';
import * as Image from '../../assets/bakground.jpg';
import {IApiData} from '../../types' 
import './main.css';



const image = Image.default;

interface IProps {
	search: boolean;
	apiData:any
	forecastData:any
	city:string
	
}

const cities = ["Bratislava", "Humenné", "Koromľa", "Košice", "Michalovce",
	"Sobrance"]

export const MainScreen: React.FC = () => {
	const [search, setSearch] = useState<IProps['search']>(false);
	const [apiData, setApiData] = useState<IProps['apiData']>({});
	const [forecastData, setForecast]= useState<IProps['forecastData']>({});
	// const [getState, setGetState] = useState('kosice');
	const [city, setCity] = useState<IProps['city']>('Kosice');

	const apiKey:string = (process.env.REACT_APP_API_KEY as string);
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	const forecastUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
	useEffect(() => {
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((data) => setApiData(data));
	}, [weatherUrl]);


	useEffect(() => {
		fetch(forecastUrl)
			.then((res) => res.json())
			.then((data) => setForecast(data));
	}, [forecastUrl]);


console.log(apiData)



	return (
		<div className='main-wrapper'>
			<img src={image} alt='some' className='main-image' />
			{!search ? (
				<div className='panel'>
					<Headings search={search} setSearch={setSearch} city={city} />
					<CurrentWeather apiData={apiData} />
					<Row apiData={apiData}/>
					<Forecast forecastData={forecastData} />
				</div>
			) : (
				<div className='search-panel'>
					<Search  cities={cities}/>
				</div>
			)}
		</div>
	);
};
