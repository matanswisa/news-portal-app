from django.db import models

# Create your models here.
class NewsPosts(models.Model):

    title = models.CharField(max_length=150)

    content = models.TextField()

    image_url = models.TextField()
    