
const NS = 'inizio'

export const keys = {}

const key = value => {
    keys[value] = `${NS}.${value}`
}

key('theme') // Light or dark
key('weatherUnits') // Imperial or otherwise
key('weatherLastUpdatedAt') // Timestamp
key('weatherUpdateFrequency') // In hours
key('weatherLastForecast') // In hours

//

export const themes = ['dark', 'light']

export const dateFormat = 'dddd, MMMM D, YYYY'
export const timeFormat = 'hh:mm A'

export const defaultTimezones = [
    'America/New_York',
    'Europe/Berlin',
    'America/Bogota',
    'America/Cancun',
    'America/Los_Angeles',
]

export { default as timezones } from './timezones'
