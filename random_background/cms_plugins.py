from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from random_background.models import BackgroundImage, BackgroundImageSet
from random_background.models import BackgroundImagePlugin as BackgroundImagePluginModel
from django.utils.translation import ugettext as _

import admin

class BackgroundImagePlugin(CMSPluginBase):
    model = BackgroundImagePluginModel
    name = _("BackgroundImage")
    render_template = "random-bg.html"
    
    def render(self, context, instance, placeholder):
        context.update({
            'backgroundimage':instance.backgroundimage,
            'object':instance,
            'placeholder':placeholder
        })
        return context
    
plugin_pool.register_plugin(BackgroundImagePlugin)

