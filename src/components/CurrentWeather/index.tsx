import React from 'react'
import {Condition} from './Condition'
import { CurrentTemperature } from './CurrentTemperature'
import { TempDifference } from "./TempDifference";

import './currentWeather.css'

export const CurrentWeather = () => {
    return (
       <div className="current-weather">
           <Condition />
           <CurrentTemperature/>
           <TempDifference />
       </div>
    )
}
