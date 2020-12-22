// Store user location  in local storage 
class Storage {
  constructor() {
    this.latitude = 'latitude'
    this.longitude = 'longitude'
    this.defaultLatitude = parseFloat('39.1031')
    this.defaultLongitude = parseFloat('-84.45689')
  }

  getLocationData() {
    localStorage.getItem('latitude') === null
      ? (this.latitude = this.defaultLatitude)
      : (this.latitude = localStorage.getItem('latitude'))

    localStorage.getItem('longitude') === null
      ? (this.longitude = this.defaultLongitude)
      : (this.longitude = localStorage.getItem('longitude'))

    return {
      latitude: this.latitude,
      longitude: this.longitude
    }
  }

  setLocationData(latitude, longitude) {
    localStorage.setItem('latitude', latitude)
    localStorage.setItem('longitude', longitude)
  }
}

