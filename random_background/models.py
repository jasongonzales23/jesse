from django.db import models

class BackgroundImageSet(models.Model):
    name = models.CharField(max_length=255)
    def __unicode__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'background image sets'

class BackgroundImage(models.Model):
    imageset = models.ForeignKey(BackgroundImageSet)
    image = models.ImageField(upload_to="uploads/backgroundImages/")
    #def __unicode__(self):
        #return self.image

from cms.models import CMSPlugin

class BackgroundImagePlugin(CMSPlugin):
    backgroundimage = models.ForeignKey('random_background.BackgroundImageSet',related_name='plugins')
    def __unicode__(self):
        return self.backgroundimage.name


