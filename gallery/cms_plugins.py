from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from gallery.models import Gallery, Image
from gallery.models import GalleryPlugin as GalleryPluginModel
from django.utils.translation import ugettext as _

import admin

class GalleryPlugin(CMSPluginBase):
    model = GalleryPluginModel
    name = _("Gallery")
    render_template = "gallery.html"
    
    def render(self, context, instance, placeholder):
        context.update({
            'gallery':instance.gallery,
            'object':instance,
            'placeholder':placeholder
        })
        return context
    
plugin_pool.register_plugin(GalleryPlugin)