from django.contrib import admin
from django.urls import path
from darwinstudiosApp.views import index, espacios, nosotros, producciones, contacto


urlpatterns = [
    path('', index, name="Home"),
    path('espacios/', espacios, name="Espacios"),
    path('nosotros/', nosotros, name="Nosotros"),
    path('producciones/', producciones, name="Producciones"),
    path('contacto/', contacto, name="Contacto")
]