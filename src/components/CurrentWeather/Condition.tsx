import React from 'react'

import './currentWeather.css'

export const Condition = () => {
    return (
        <div>
            <div className="current-condition">
                <div className="condition-icon">
                    ICON
                </div>
                <p className="contion-value">Sunny</p>
            </div>
        </div>
    )
}
