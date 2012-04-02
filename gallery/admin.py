from gallery.models import Gallery, Image
from django.contrib import admin
#from cms.admin.placeholderadmin import PlaceholderAdmin

class ImageInline(admin.StackedInline):
    model = Image
    
class GalleryAdmin(admin.ModelAdmin):
    inlines = [ImageInline,]

    
admin.site.register(Gallery, GalleryAdmin)