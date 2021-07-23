import React from 'react'
import * as Places from '../../assets/Places.png'
import './main.css'

interface IProps {
	search: boolean
	setSearch: (search: boolean) => void
	city: string
}

const places = Places.default

export const Headings: React.FC<IProps> = ({ search, setSearch, city }) => {
	const options: any = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	const time = new Date().toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
	})
	const date = new Date().toLocaleDateString(undefined, options)

	return (
		<div className='headings'>
			<div className='date'>
				{date} | {time}
			</div>
			<div
				className='location'
				style={{ background: 'rgba(13, 159, 234, 0.08)' }}
				onClick={() => setSearch(!search)}>
				<p>
					{city}, Slovakia
					<img src={places} alt='some' className='places-icon' />
				</p>
			</div>
		</div>
	)
}
