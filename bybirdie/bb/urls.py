from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.index, name='home'),
    path('location/lat<str:lat>&lon<str:lon>', views.locationEnabled, name='location'),
]