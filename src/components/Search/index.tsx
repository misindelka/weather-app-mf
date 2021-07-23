import React, { useState } from 'react'
import { cityList } from '../../constants'
import './search.css'

interface ISearch {
	handleChangeCurrentCity: (arg: string) => void
}

interface IStateProps {
	searchValue: string
	cityValue: {
		id: number
		name: string
		temp: number
	}[]
}
export const Search: React.FC<ISearch> = ({ handleChangeCurrentCity }) => {
	const [searchValue, setSearchValue] = useState<IStateProps['searchValue']>(
		''
	)
	const [searchedCity, setSearchedCity] = useState<IStateProps['cityValue']>([
		{ id: 0, name: '', temp: 0 },
	])
	const data = !searchValue ? cityList : searchedCity

	const filterCities = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const searchedValue = e.target.value
		setSearchValue(searchedValue)

		setSearchedCity(
			cityList.filter((city) => {
				return city.name
					.toLowerCase()
					.includes(searchedValue.toLowerCase())
			})
		)
	}

	return (
		<div className='search'>
			<p className='location'> Location</p>
			<input
				className='search-input'
				type='text'
				placeholder='Search city...'
				onChange={filterCities}
			/>
			{data.map(({ id, name, temp }) => (
				<div
					key={id}
					className='results'
					onClick={() => handleChangeCurrentCity(name)}>
					<p>{name}</p>
					<p className='temp'>{temp}C</p>
				</div>
			))}
		</div>
	)
}
