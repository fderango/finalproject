from __future__ import unicode_literals

from django.db import models
import datetime
from django.utils import timezone

# Create your models here.
class Review(models.Model):
    email = models.EmailField(max_length=254) #Stores the email
    stars = models.IntegerField()# Stores the star rating
    comments = models.TextField() #Stores the user comments


class Product(models.Model):
    name = models.TextField() #Stores the email
    price = models.DecimalField(decimal_places=2, max_digits=10) # Stores the star rating
    description = models.TextField() #Stores the user comments

class IndexModel(models.Model):
    Title = models.CharField(max_length=1000)