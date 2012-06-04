# encoding: utf-8
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models

class Migration(SchemaMigration):

    def forwards(self, orm):
        
        # Adding model 'BackgroundImageSet'
        db.create_table('random_background_backgroundimageset', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=255)),
        ))
        db.send_create_signal('random_background', ['BackgroundImageSet'])

        # Adding field 'BackgroundImage.imageset'
        db.add_column('random_background_backgroundimage', 'imageset', self.gf('django.db.models.fields.related.ForeignKey')(default=0, to=orm['random_background.BackgroundImageSet']), keep_default=False)

        # Changing field 'BackgroundImagePlugin.backgroundimage'
        db.alter_column('cmsplugin_backgroundimageplugin', 'backgroundimage_id', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['random_background.BackgroundImageSet']))


    def backwards(self, orm):
        
        # Deleting model 'BackgroundImageSet'
        db.delete_table('random_background_backgroundimageset')

        # Deleting field 'BackgroundImage.imageset'
        db.delete_column('random_background_backgroundimage', 'imageset_id')

        # Changing field 'BackgroundImagePlugin.backgroundimage'
        db.alter_column('cmsplugin_backgroundimageplugin', 'backgroundimage_id', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['random_background.BackgroundImage']))


    models = {
        'cms.cmsplugin': {
            'Meta': {'object_name': 'CMSPlugin'},
            'creation_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'language': ('django.db.models.fields.CharField', [], {'max_length': '15', 'db_index': 'True'}),
            'level': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'lft': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'parent': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.CMSPlugin']", 'null': 'True', 'blank': 'True'}),
            'placeholder': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['cms.Placeholder']", 'null': 'True'}),
            'plugin_type': ('django.db.models.fields.CharField', [], {'max_length': '50', 'db_index': 'True'}),
            'position': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True', 'blank': 'True'}),
            'rght': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'}),
            'tree_id': ('django.db.models.fields.PositiveIntegerField', [], {'db_index': 'True'})
        },
        'cms.placeholder': {
            'Meta': {'object_name': 'Placeholder'},
            'default_width': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'slot': ('django.db.models.fields.CharField', [], {'max_length': '50', 'db_index': 'True'})
        },
        'random_background.backgroundimage': {
            'Meta': {'object_name': 'BackgroundImage'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'imageset': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['random_background.BackgroundImageSet']"})
        },
        'random_background.backgroundimageplugin': {
            'Meta': {'object_name': 'BackgroundImagePlugin', 'db_table': "'cmsplugin_backgroundimageplugin'", '_ormbases': ['cms.CMSPlugin']},
            'backgroundimage': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'plugins'", 'to': "orm['random_background.BackgroundImageSet']"}),
            'cmsplugin_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['cms.CMSPlugin']", 'unique': 'True', 'primary_key': 'True'})
        },
        'random_background.backgroundimageset': {
            'Meta': {'object_name': 'BackgroundImageSet'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        }
    }

    complete_apps = ['random_background']
