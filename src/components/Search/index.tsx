import React from 'react';
import './search.css';

export const Search: React.FC = () => {
	return (
		<div className='search'>
			<p className='location'> Location</p>
			<input
				className='search-input'
				type='text'
				placeholder='Search city...'
			/>
			<div className='results'>
			 <p>City</p>
             <p className='temp'>35 C</p>
			</div>
		</div>
	);
};
