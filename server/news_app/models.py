from django.db import models

# Create your models here.
class NewsPosts(models.Model):

    title = models.CharField(max_length=150)

    content = models.TextField()

    image_url = models.TextField()

class Comments(models.Model):

    nickname = models.CharField(max_length=25)

    content = models.CharField(max_length=300)

    postId = models.ForeignKey("NewsPosts" , on_delete=models.SET_NULL, null=True)