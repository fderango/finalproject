from rest_framework import serializers
from  BrewCoffee_Core.models import Review
from  BrewCoffee_Core.models import Product

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('email', 'stars', 'comments')


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'price', 'description', 'image', 'size')
