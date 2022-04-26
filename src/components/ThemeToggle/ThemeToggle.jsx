import * as effects from '../../effects'
import cn from 'classnames'

import { FaSun, FaMoon } from 'react-icons/fa'

import './ThemeToggle.css'

const ThemeToggle = ({
    className,
}) => {
    
    const { theme, switchTheme } = effects.useThemeEffect()
    
    const ThemeIcon = theme === 'light' ? FaSun : FaMoon
    
    return (
        
        <div className={className}>
            
            <ThemeIcon
                className={cn(
                    'ThemeToggle', {
                        [className]: className,
                    }
                )}
                onClick={() => switchTheme()} />
            
        </div>
        
    )
    
}

ThemeToggle.defaultProps = {
    className: '',
}

export default ThemeToggle
