# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-06-04 17:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pedidos', '0002_auto_20180411_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedidos',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Status'),
        ),
    ]