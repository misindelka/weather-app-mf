import React from 'react'
import './search.css'

interface ISearch {
	cities: {
		id: number
		name: string
		temp: number
	}[]
}

export const Search: React.FC<ISearch> = ({ cities}) => {
	return (
		<div className='search'>
			<p className='location'> Location</p>
			<input
				className='search-input'
				type='text'
				placeholder='Search city...'
			/>
			{cities.map(({ id, name, temp }) => (
				<div key={id} className='results'>
					<p>{name}</p>
					<p className='temp'>{temp}C</p>
				</div>
			))}
		</div>
	)
}
