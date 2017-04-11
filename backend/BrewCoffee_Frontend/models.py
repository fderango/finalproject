from __future__ import unicode_literals

from django.db import models
import datetime
from django.utils import timezone
# Create your models here.
class IndexModel(models.Model):
    Title = models.CharField(max_length=1000)