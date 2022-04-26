import { useRef, useState, useEffect } from 'react'

const DEBUG_ENABLED = false

// @todo make these configurable
const keywords = ['modern', 'art']
const source = `https://source.unsplash.com/random/400x400/?${keywords.join(',')}`

const ModernArt = () => {
    
    const [url, setUrl] = useState('')
    
    useEffect(() => {
        
        const fetchRandomImage = async () => {
            try {
                const res = await fetch(source)
                setUrl(res.url)
            } catch (e) {
                console.error('ModernArt#fetchRandomImage', e)
            }
        }
        
        if (DEBUG_ENABLED)
            fetchRandomImage()
        
    }, [])
    
    if (!url?.length) return null
    
    return (
        
        <a
            href={url}
            target="_blank"
            referrerPolicy="no-referrer">
            
            <img className="rounded" src={url} />
            
        </a>
        
    )
    
}

export default ModernArt
