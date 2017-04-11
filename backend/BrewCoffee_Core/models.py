from __future__ import unicode_literals

from django.db import models
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