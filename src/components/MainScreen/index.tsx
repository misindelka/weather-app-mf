import React, { useState } from 'react'
import { Headings } from './Headings'
import { Row } from './Row'
import { CurrentWeather } from '../CurrentWeather'
import { Forecast } from '../Forecast'
import { Search } from '../Search'
import { IWeatherData, IForecastData } from '../../types'
import { initialForecastData, initialWeaterData } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import { weatherApi, forecastApi } from '../../api/index'
import './main.css'

interface IProps {
    search: boolean
    city: string
}


export const MainScreen: React.FC = () => {
    const [search, setSearch] = useState<IProps['search']>(false)
    const [city, setCity] = useState<IProps['city']>('Košice')

    const weatherURL = weatherApi(city)
    const forecastURL = forecastApi(city)

    const { data: weather } = useFetch<IWeatherData>(
        weatherURL,
        initialWeaterData
    )
    const { data: forecastData } = useFetch<IForecastData>(
        forecastURL,
        initialForecastData
    )

    const handleChageCurrentCity = (name: string): void => {
        setCity(name)
        setSearch(!search)
    }

    return (
        <div className="main-wrapper">
            <div className="main-image" />
            {!search ? (
                <div className="panel">
                    <Headings
                        search={search}
                        setSearch={setSearch}
                        city={city}
                    />
                    <CurrentWeather weatherData={weather} />
                    <Row weatherData={weather} />
                    <Forecast forecastData={forecastData} />
                </div>
            ) : (
                <div className="search-panel">
                    <Search handleChangeCurrentCity={handleChageCurrentCity} />
                </div>
            )}
        </div>
    )
}
