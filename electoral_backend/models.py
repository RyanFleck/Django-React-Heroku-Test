from django.db import models

# Create your models here.


class Record(models.Model):
    content = models.CharField(max_length=200)
