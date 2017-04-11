from rest_framework import serializers
from reviews.models import Customer_Reviews
from reviews.models import Products


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer_Reviews
        fields = ('email', 'stars', 'comments')


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('name', 'price', 'description')
