import { keys } from '@constants'

const DEBUG_FAKE_DATA = true

// @todo prob wanna show hourly later
const exclude = ['alerts', 'hourly', 'minutely'].join(',')

const request = async (url) => {
    
    const apiKey = process.env.OPEN_WEATHER_API_KEY
    const baseUrl = 'https://api.openweathermap.org/data/2.5'
    const units = localStorage.getItem(keys.weatherUnits) || 'imperial'
    
    const res = await fetch(`${baseUrl}/${url}&units=${units}&appid=${apiKey}`)
    
    return await res.json()
    
}

export const getForecast = async (lat, lng) => {
    
    if (DEBUG_FAKE_DATA) {
        return {
            current: {
                temp: 80.47,
                feels_like: 84.31,
                timezone: 'America/ Cancun',
                sunrise: 1650885668,
                sunset: 1650931797,
                weather: {
                    description: 'cloudy',
                },
            },
        }
    }
    
    return await request(`onecall?lat=${lat}&lon=${lng}&exclude=${exclude}`)
}
