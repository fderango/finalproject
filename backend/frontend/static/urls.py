from django.conf.urls import url, include
from django.views.generic.base import RedirectView

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^$', RedirectView.as_view(url='static/index.html', permanent=False), name='index')
]