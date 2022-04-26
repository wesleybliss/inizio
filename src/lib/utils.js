import dayjs from 'dayjs'
import { keys, dateFormat, timeFormat } from '@constants'

export const formatDate = timestamp =>
    dayjs(timestamp).format(dateFormat)

export const formatTime = timestamp =>
    dayjs(timestamp).format(timeFormat)

// Gets the current timezone name
export const getTimezoneName = () => {
    return dayjs.tz.guess() || Intl.DateTimeFormat().resolvedOptions().timeZone
}

export const shouldUpdateWeather = () => {
    
    try {
        
        const lastUpdatedAtValue = localStorage.getItem(keys.weatherLastUpdatedAt) || null
        
        // First time we're checking the weather
        if (!lastUpdatedAtValue) return true
        
        const lastUpdatedAt = dayjs(parseInt(lastUpdatedAtValue, 10))
        
        const updateFrequencyValue = localStorage.getItem(keys.weatherUpdateFrequency)
        const updateFrequency = parseInt(updateFrequencyValue || '4', 10)
        
        const nextUpdate = lastUpdatedAt.add(updateFrequency, 'hour')
        const currentDate = dayjs()
        
        if (currentDate.isBefore(nextUpdate)) {
            /* console.log(
                'Not updating weather bc', currentDate.format(), 'is not after',
                nextUpdate.format(), '(+', updateFrequency, 'hours)') */
            return false
        }
        
    } catch (e) {
        
        console.error('Weather: could not parse lastUpdatedAt', e)
        return true
        
    }
    
    return true
    
}
