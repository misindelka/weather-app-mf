import React from 'react'
import './main.css'

interface IProps {
    search: boolean
    setSearch: (search: boolean) => void
}

export const Headings:React.FC<IProps> = ({search, setSearch}) => {
    return (
        <div className="headings">
            <div className="date">
                thue 22/33/35 
            </div>
            <div className="location">
               <p >KOSICE, Slovakia</p> 
               <button className="search-button" onClick={() => setSearch(!search)}>x</button>
            </div>
        </div>
    )
}
