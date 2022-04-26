import ThemeToggle from '../ThemeToggle'

import './Navbar.css'

const Navbar = () => {
    
    return (
        
        <nav className="Navbar">
            
            <header>
                INIZIO
            </header>
            
            <div className="Navbar-actions">
                <ThemeToggle />
            </div>
            
        </nav>
        
    )
    
}

export default Navbar
