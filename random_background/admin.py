from random_background.models import BackgroundImage, BackgroundImageSet
from django.contrib import admin

class ImageInline(admin.StackedInline):
    model = BackgroundImage

class BackgroundImagePlugin(admin.ModelAdmin):
    inlines = [ImageInline,]

admin.site.register(BackgroundImageSet,BackgroundImagePlugin)

