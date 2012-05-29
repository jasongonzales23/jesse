from gallery.models import Gallery, Image
from django.contrib import admin


class ImageInline(admin.StackedInline):
    model = Image

class GalleryAdmin(admin.ModelAdmin):
    inlines = [ImageInline,]

    
admin.site.register(Gallery, GalleryAdmin)