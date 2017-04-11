from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Customer_Reviews(models.Model):
    email = models.EmailField(max_length=254) #Stores the email
    stars = models.IntegerField()# Stores the star rating
    comments = models.TextField() #Stores the user comments


class Products(models.Model):
    name = models.TextField() #Stores the email
    price = models.DecimalField(decimal_places=2, max_digits=10) # Stores the star rating
    description = models.TextField() #Stores the user comments
