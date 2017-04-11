from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone

# Create your models here.
class Review(models.Model):
    email = models.EmailField(max_length=254) #Stores the email
    stars = models.IntegerField()# Stores the star rating
    comments = models.TextField(null=1) #Stores the user comments
    
class ProductSize(models.Model):
    name = models.CharField(max_length=256)

class Product(models.Model):
    name = models.CharField(max_length=512) #Stores the product_name
    price = models.DecimalField(decimal_places=2, max_digits=10, null=1) # Stores the star rating
    description = models.TextField(null=1) #Stores the description
    size = models.ForeignKey(ProductSize, on_delete=models.CASCADE, null=1)
    image = models.TextField(max_length=1024, null=1)

class IndexModel(models.Model):
    Title = models.CharField(max_length=1000)
    description = models.TextField()

class Cart (models.Model):
    user = models.ForeignKey(User)
    active = models.BooleanField(default=True)
    order_date = models.DateField(null=True)
    payment_type = models.CharField(max_length=100, null=True)
    payment_id = models.CharField(max_length=100, null=True)

    def add_to_cart(self,products_id):
        product = Product.objects.get(pk=products_id)
        try:
            preexisting_order = CartProduct.objects.get(product_id=product.id, cart=self)
            preexisting_order.quantity +=1
            preexisting_order.save()
        except (CartProduct.DoesNotExist):
            new_order = CartProduct.objects.create(product_id = product.id, cart = self, quantity = 1)
            new_order.save()

    def remove_from_cart(self,products_id):
        product = Product.objects.get(pk=products_id)
        try:
            preexisting_order = CartProduct.objects.get(products_id=products_id,cart=self)
            if preexisting_order.quantity > 1:
                preexisting_order.quantity -= 1
                preexisting_order.save()
            else:
                preexisting_order.delete()
        except (CartProduct.DoesNotExist):
            pass

class CartProduct(models.Model):
    product = models.ForeignKey(Product)
    cart = models.ForeignKey(Cart)
    quantity = models.IntegerField()