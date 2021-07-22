import React from 'react'
import { RowCard } from './RowCard'
 
import './main.css'

export const Row = () => {
    return (
        <div className="row">
            <RowCard/>
            <RowCard/> <RowCard/>
            
        </div>
    )
}
