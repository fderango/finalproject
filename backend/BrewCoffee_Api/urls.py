from django.conf.urls import url, include
from rest_framework import routers
from .viewsets import CustomerReviewViewSet

from .viewsets import ProductViewSet

router = routers.DefaultRouter()
router.register('reviews', CustomerReviewViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
    url(r'^', include(router.urls)) #base router
]