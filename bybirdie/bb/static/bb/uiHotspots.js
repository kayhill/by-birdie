// select elements
class UI {
  constructor() {
    this.map = document.getElementById('map')
    this.hotspotList = document.getElementById('hslist')
    
  }
  
  displayHotspotList(hotspots) {
    let data = hotspots.hotspotData;    
    
    for (var i = 0; i < data.length; i++) {      
      let name = data[i].locName;
      
      let li = document.createElement("li");
      li.innerHTML = `${name}`    

      this.hotspotList.appendChild(li);
    }
     
  }

}
