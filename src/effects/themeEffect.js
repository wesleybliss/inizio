import { useState, useEffect } from 'react'
import { keys, themes } from '../constants'

export const useThemeEffect = () => {
    
    const [theme, setTheme] = useState('dark')
    
    const applyTheme = newTheme => {
        themes.forEach(it => {
            if (document.documentElement.classList.contains(it))
                document.documentElement.classList.remove(it)
        })
        document.documentElement.classList.add(newTheme)
    }
    
    const updateTheme = newTheme => {
        setTheme(newTheme)
        applyTheme(newTheme)
        localStorage.setItem(keys.theme, newTheme)
    }
    
    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        // console.log('useThemeEffect: switchTheme', newTheme)
        updateTheme(newTheme)
    }
    
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem(keys.theme) || 'dark'
            // console.log('useThemeEffect: initial theme', savedTheme)
            updateTheme(savedTheme)
        } catch (e) {
            console.error('useThemeEffect:', e)
        }
    }, [])
    
    return {
        theme,
        switchTheme,
    }
    
}
