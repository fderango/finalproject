from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import ReviewsSerializer
from .serializers import ProductsSerializer
from  BrewCoffee_Core.models import Review
from  BrewCoffee_Core.models import Product


class CustomerReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewsSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset =  Product.objects.all()
    serializer_class = ProductsSerializer
