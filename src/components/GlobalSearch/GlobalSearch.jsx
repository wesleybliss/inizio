import { useRef, useState, useEffect } from 'react'

import './GlobalSearch.css'

const GlobalSearch = () => {
    
    const refQuery = useRef()
    
    const [query, setQuery] = useState('')
    
    const onQueryChange = e => {
        setQuery(e.keyCode === 27 ? '' : e.target.value)
    }
    
    const onGlobalKeyUp = e => {
        
        if (e.keyCode === 27) {
            setQuery('')
            return refQuery.current?.blur()
        }
        
        const key = String.fromCharCode(e.keyCode)
        const regexAlphaNumeric = /^[a-z0-9]+$/i
        
        if (key.length === 1 && regexAlphaNumeric.test(key)) {
            if (document.activeElement !== refQuery.current) {
                setQuery(query + e.key)
                refQuery.current?.focus()
            }
        }
        
    }
    
    useEffect(() => {
        document.documentElement.addEventListener('keyup', onGlobalKeyUp)
        return () => document.documentElement.removeEventListener('keyup', onGlobalKeyUp)
    }, [])
    
    return (
        
        <div className="GlobalSearch">
            
            <input
                ref={refQuery}
                className=""
                type="text"
                autoComplete="false"
                value={query}
                placeholder="TYPE ANYWHERE TO SEARCH..."
                onChange={onQueryChange} />
            
        </div>
        
    )
    
}

export default GlobalSearch
