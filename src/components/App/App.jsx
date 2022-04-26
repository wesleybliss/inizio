import Navbar from '../Navbar'

import Vitals from '@components/Vitals'
import GlobalSearch from '@components/GlobalSearch'
import WorldClock from '@components/WorldClock'
import Weather from '@components/Weather'

import './App.css'

const App = () => {
    
    return (
        
        <div className="App scrollbar-minimal">
            
            <Navbar />
            
            <div className="mt-12 flex justify-center">
                <Vitals />
            </div>
            
            <GlobalSearch />
            
            <WorldClock />
            
            <div className="p-8 grid grid-cols-4 gap-4">
                <Weather />
            </div>
            
        </div>
        
    )
    
}

export default App
