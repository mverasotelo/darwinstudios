# Generated by Django 3.1.4 on 2021-01-13 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('darwinstudiosApp', '0002_auto_20210113_1245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacto',
            name='fecha',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
