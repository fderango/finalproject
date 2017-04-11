from django.conf.urls import url, include
from django.views.generic.base import RedirectView

from django.conf.urls.static import static
from django.conf import settings

from . import views

app_name = 'BrewCoffee'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index')
]

