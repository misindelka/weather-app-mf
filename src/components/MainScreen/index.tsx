import React, { useState } from 'react';
import { Headings } from './Headings';
import { Row } from './Row';
import { CurrentWeather } from '../CurrentWeather';
import { Forecast } from '../Forecast';
import { Search } from '../Search';
import * as Image from '../../assets/bakground.jpg';
import './main.css';

const image = Image.default;

interface IProps {
	search: boolean;
}

export const MainScreen: React.FC = () => {
	const [search, setSearch] = useState<IProps['search']>(false);

	return (
		<div className='main-wrapper'>
			<img src={image} alt='some' className='main-image' />
			{!search ? (
				<div className='panel'>
					<Headings search={search} setSearch={setSearch} />
					<CurrentWeather />
					<Row />
					<Forecast />
				</div>
			) : (
				<div className='search-panel'>
					<Search />
				</div>
			)}
		</div>
	);
};
