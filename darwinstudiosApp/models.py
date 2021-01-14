from django.db import models

# Create your models here.

class Contacto(models.Model):
    nombre=models.CharField(max_length=30)
    email=models.EmailField()
    telefono=models.IntegerField(blank=True, null=True)
    mensaje=models.TextField()
    fecha=models.DateTimeField(auto_now=True)