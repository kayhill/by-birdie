from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import os 

# Create your views here.
def index(request):
    googleAPI = os.environ.get('GOOGLE_MAPS_API_KEY')
    ebirdAPI = os.environ.get('EBIRD_API_TOKEN')
    
    #
    #if request.method == 'POST':
     #   lat = request.POST['lat']
     #   lon = request.POST['lon']
        
    return render(request, 'bb/index.html', {
        "googleAPI": googleAPI,
        "ebirdAPI": ebirdAPI
    })
