// select elements
class UI {
  constructor() {
    this.map = document.getElementById('map')
    this.hotspotList = document.getElementById('hslist')
    this.notablesList = document.getElementById('notablelist')
    
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

  displayNotablesList(notables) {
    let data = notables.notablesData;    
    
    for (var i = 0; i < data.length; i++) {      
      let name = data[i].comName;
      let time = data[i].obsDt;
      
      let li = document.createElement("li");
      li.innerHTML = `${name} , Observed ${time}`    

      this.notablesList.appendChild(li);
    }
  }
  
}
