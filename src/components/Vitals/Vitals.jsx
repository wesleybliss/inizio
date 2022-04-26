import { formatDate } from '@lib/utils'

import './Vitals.css'

const Vitals = () => {
    
    return (
        
        <div className="Vitals">
            
            <section className="datetime">
                {formatDate(Date.now())}
            </section>
            
        </div>
        
    )
    
}

export default Vitals
