from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import ReviewsSerializer
from .serializers import ProductsSerializer
from reviews.models import Customer_Reviews
from reviews.models import Products


class CustomerReviewViewSet(viewsets.ModelViewSet):
    queryset = Customer_Reviews.objects.all()
    serializer_class = ReviewsSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset =  Products.objects.all()
    serializer_class = ProductsSerializer
