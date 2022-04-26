
const NS = 'inizio'

export const keys = {}

const key = value => {
    keys[value] = `${NS}.${value}`
}

key('theme')
key('weatherUnits')

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
