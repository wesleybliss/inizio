import { useState, useEffect } from 'react'
import * as constants from '@constants'

export const useWorldClocksEffect = () => {
    
    const [timezones, setTimezones] = useState([])
    
    useEffect(() => {
        
        let zones = []
        
        try {
            const json = localStorage.getItem(keys.timezones)
            if (!json.length)
                throw new Error('Saved timezones were empty')
            zones = JSON.parse(json)
        } catch (e) {
            zones = constants.defaultTimezones
        }
        
        setTimezones(zones)
        
    }, [])
    
    return {
        timezones,
    }
    
}
