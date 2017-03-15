# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('index', models.IntegerField()),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField(null=True, blank=True)),
                ('date_time', models.DateTimeField(auto_now_add=True)),
                ('pinned', models.BooleanField(default=False)),
                ('do_flag', models.BooleanField(default=False)),
                ('is_delete', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ['-date_time'],
            },
            bases=(models.Model,),
        ),
    ]
