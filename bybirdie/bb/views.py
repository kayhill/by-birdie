from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import os 

# Create your views here.
def index(request):
    if request.method == 'POST':
        lat = request.POST['lat']
        lon = request.POST['lon']
        return HttpResponseRedirect(reverse('location', args=[lat, lon]))

    return render(request, 'bb/index.html')

def locationEnabled(request, lat, lon):
    googleAPI = os.environ.get('GOOGLE_MAPS_API_KEY')
    
        
    return render(request, 'bb/location.html', {
        "lon": lon,
        "lat": lat,
        "googleAPI": googleAPI
    })