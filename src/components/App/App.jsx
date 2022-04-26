import Navbar from '../Navbar'

import Vitals from '@components/Vitals'
import GlobalSearch from '@components/GlobalSearch'
import WorldClock from '@components/WorldClock'
import Weather from '@components/Weather'
import ModernArt from '@components/ModernArt'

import './App.css'

const gridColsMap = {
    0: 'grid-cols-1',
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
}

const App = () => {
    
    const gridCols = []
    
    // @todo if/then these based on settings
    gridCols.push(Weather)
    gridCols.push(ModernArt)
    
    return (
        
        <div className="App scrollbar-minimal">
            
            <Navbar />
            
            <div className="mt-12 flex justify-center">
                <Vitals />
            </div>
            
            <GlobalSearch />
            
            <WorldClock />
            
            <div className={`p-8 grid ${gridColsMap[gridCols.length]} gap-4 justify-center place-content-center`}>
                {gridCols.map((Component, i) => (
                    <div key={`grid-col-${i}`} className="w-full flex justify-center">
                        <Component key={`grid-${i}`} />
                    </div>
                ))}
            </div>
            
        </div>
        
    )
    
}

export default App
