import React from 'react'
import './main.css'

export const RowCard = () => {
    return (
        <div className="row-card">
            <div className="card-icon">
                Icon
            </div>
            <p className="card-value">
              56%
            </p>
            <p className="card-title">humidity</p>
        </div>
    )
}
