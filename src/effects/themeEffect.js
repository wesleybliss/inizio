import { useState, useEffect } from 'react'
import { keys, themes } from '../constants'

export const useThemeEffect = () => {
    
    const [theme, setTheme] = useState('dark')
    
    const applyTheme = () => {
        themes.forEach(it => {
            if (document.documentElement.classList.contains(it))
                document.documentElement.classList.remove(it)
        })
        document.documentElement.classList.add(theme)
    }
    
    const switchTheme = () => {
        const value = theme === 'dark' ? 'light' : 'dark'
        console.log('useThemeEffect: switchTheme', value)
        setTheme(value)
        applyTheme(value)
        localStorage.setItem(keys.theme, value)
    }
    
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem(keys.theme) || 'dark'
            console.log('useThemeEffect: initial theme', savedTheme)
            switchTheme(savedTheme)
        } catch (e) {
            console.error('useThemeEffect:', e)
        }
    }, [])
    
    return {
        theme,
        switchTheme,
    }
    
}
