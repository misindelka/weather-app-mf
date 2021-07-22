import React from 'react'

interface IProps {
    temperature : {
        temp:number
    }
}

export const CurrentTemperature:React.FC<IProps> = ({temperature}) => {
    const currentTemp = (temperature?.temp - 273.15).toFixed();

    return (
        <div className="temperature">
            <p>{currentTemp} C </p>
        </div>
    )
}
