from django.contrib import admin
from django.urls import path
from darwinstudiosApp.views import index, espacios, nosotros, trabajos, contacto


urlpatterns = [
    path('', index, name="Home"),
    path('espacios/', espacios, name="Espacios"),
    path('nosotros/', nosotros, name="Nosotros"),
    path('trabajos/', trabajos, name="Trabajos"),
    path('contacto/', contacto, name="Contacto")
]