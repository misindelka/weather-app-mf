import React from 'react'

export const ForecastCard = () => {
    return (
    <div className="forecast-card">
        <div className="forecast-icon">ICON</div>
        <div className="forecast-date">
            THU, 28
        </div>
        <div className="temperature-diffs">
            <p className="temp-max">
                23 C 
            </p>
            <p className="temp-mim">
                23 C
            </p>
        </div>
    </div>
    )
}
