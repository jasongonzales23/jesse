from django.db import models
from django.core.urlresolvers import reverse


class Gallery(models.Model):
    name = models.CharField(max_length=255)
    #description = models.TextField(max_length=10000, help_text="This text appears on the portfolio overview page.")
    def __unicode__(self):
        return self.name
    @models.permalink
    def get_absolute_url(self):
        return reverse('gallery_view', args=[self.pk])
    class Meta:
        verbose_name_plural = 'galleries'
    
class Image(models.Model):
    gallery = models.ForeignKey(Gallery)
    order = models.IntegerField()
    image = models.ImageField(upload_to="uploads/galleryImages/")
    title = models.TextField(max_length=1255, blank=True)
    caption = models.TextField(max_length=10000, blank=True)
    
    class Meta:
        ordering = ["order"]
    
    def __unicode__(self):
        return str(self.order)

#stuff you need to make it a plugin
from cms.models import CMSPlugin

class GalleryPlugin(CMSPlugin):
    gallery = models.ForeignKey('gallery.Gallery', related_name='plugins')
    #page = models.CharField(max_length=255)
    def __unicode__(self):
        return self.gallery.name

