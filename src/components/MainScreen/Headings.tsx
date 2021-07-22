import React from 'react'
import './main.css'

interface IProps {
    search: boolean
    setSearch: (search: boolean) => void
    city:string
 
}

export const Headings:React.FC<IProps> = ({search, setSearch,city}) => {
    const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString(undefined, options)

    return (
        <div className="headings">
            <div className="date">
              {date} | {time}
            </div>
            <div className="location" onClick={() => setSearch(!search)}>
               <p >{city}, Slovakia</p> 
            </div>
        </div>
    )
}
