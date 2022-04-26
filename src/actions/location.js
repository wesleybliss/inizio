
export const getLocation = () => new Promise((resolve, reject) => {
    
    const getLatLon = position => {
        resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        })
    }
    
    navigator.geolocation.getCurrentPosition(getLatLon)
    
})
