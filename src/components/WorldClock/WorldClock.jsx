import { useState, useEffect } from 'react'
import * as effects from '@effects'
import { formatTime, getTimezoneName } from '@lib/utils'
import dayjs from 'dayjs'
import cn from 'classnames'

import './WorldClock.css'

const WorldClock = () => {
    
    const [time, setTime] = useState(dayjs().format())
    
    const { timezones } = effects.useWorldClocksEffect()
    
    const currentTimezone = getTimezoneName()
    
    useEffect(() => {
        const t = setInterval(() => setTime(Date.now()), 1000)
        return () => clearInterval(t)
    }, [])
    
    return (
        
        <div className="WorldClock font-mono">
            
            {timezones.map(it => (
                <div
                    key={it}
                    className={cn('clock', {
                        'clock-current-tz': it === currentTimezone,
                    })}>
                    <span className="timezone">
                        {it.split('/').pop().replace('_', ' ')}
                    </span>
                    <span className="time">
                        {formatTime(dayjs.tz(time, it))}
                    </span>
                </div>
            ))}
            
        </div>
        
    )
    
}

export default WorldClock
