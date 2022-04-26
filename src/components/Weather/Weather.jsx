import { useState, useEffect } from 'react'
import * as actions from '@actions'
import { keys } from '@constants'
import { formatTime } from '@lib/utils'

import './Weather.css'

const Weather = () => {
    
    const [location, setLocation] = useState(null)
    const [forecast, setForecast] = useState(null)
    const [unit, setUnit] = useState('F')
    
    useEffect(() => {
        
        const fetchForecast = async () => {
            try {
                const { lat, lng } = await actions.getLocation()
                const res = await actions.getForecast(lat, lng)
                setLocation({ lat, lng })
                setForecast(res)
            } catch (e) {
                console.error(e)
                setError(e.message || 'An unknown error has occurred')
            }
        }
        
        fetchForecast()
        
        const units = localStorage.getItem(keys.weatherUnits) || 'imperial'
        setUnit(units === 'imperial' ? 'F' : 'C')
        
    }, [])
    
    if (!location || !forecast) return (
        <div>@todo loading</div>
    )
    
    return (
        
        <div className="Weather card">
            {/* <pre><code>{JSON.stringify(location, null, 4)}</code></pre>
            <pre><code>{JSON.stringify(forecast, null, 4)}</code></pre> */}
            <div className="temp">{forecast.current.temp}&deg; {unit}</div>
            <div className="feels-like">Feels like {forecast.current.feels_like}&deg; {unit}</div>
            <div className="weather">Currently: {forecast.current.weather.description}</div>
            {/* <div className="">{forecast.current.weather.icon}</div> @todo */}
            {/* @todo forecast.daily == 0 = today, 1 = tomorrow, has more detail  */}
            <div className="timezone">{forecast.timezone}</div>
            <div className="sunrise"><b>Sunrise:</b> {formatTime(forecast.current.sunrise)}</div>
            <div className="sunset"><b>Sunset</b>: {formatTime(forecast.current.sunset)}</div>
        </div>
        
    )
    
}

export default Weather
