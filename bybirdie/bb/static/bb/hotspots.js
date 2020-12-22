class HotspotInfo {
  constructor(latitude, longitude) {
    this.lat = parseFloat(latitude)
    this.lng = parseFloat(longitude)    
  }

  async getHotspots() {

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const hotspotResponse = await fetch(`https://api.ebird.org/v2/ref/hotspot/geo?fmt=json&lat=${this.lat}&lng=${this.lng}&dist=5`, requestOptions)
      

    const hotspotData = await hotspotResponse.json();
    console.log(hotspotData);
  
    return {
      hotspotData
    }
  }

  initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: this.lat, lng: this.lng},
        zoom: 12,
      });
    
      const myPosition = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
        map: map,
      });
  }

  changeLocation(latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
  }
}