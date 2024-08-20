
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return self.title

class Mymodel(models.Model):
    """A typical class defining a model, derived from model class"""
    
    #Fields
    my_field_name = models.CharField(max_length=200, help_text='Enter text here...')
    
    # Metatada
    class Meta:
        ordering = ['my_field_name']
        
    # Methods
    def get_url(self):
        """ Returns the urls"""
        return reverse('model-detail-view', args=str(self.id))


