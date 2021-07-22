import React from 'react';
import './search.css';

interface ISearch {
	cities:any
}

export const Search: React.FC<ISearch> = ({cities}) => {
	return (
		<div className='search'>
			<p className='location'> Location</p>
			<input
				className='search-input'
				type='text'
				placeholder='Search city...'
			/>
			{cities.map((city:string) => <div className='results'>
			 <p>{city}</p>
             <p className='temp'>35 C</p>
			</div>)}
		</div>
	);
};
