from django.http import HttpResponse
import datetime
from django.template import Template,loader
from django.template.loader import get_template
from django.shortcuts import render
from django.core.mail import send_mail
from .forms import FormContacto

def index(request):
    return render(request,"index.html")

def espacios(request):
    return render(request,"espacios.html")

def trabajos(request):
    return render(request,"trabajos.html")

def nosotros(request):
    return render(request,"nosotros.html")

def contacto(request):
    if request.method=="POST":
        formulario=FormContacto(request.POST)   
        if formulario.is_valid():
            formulario.save()
            nombre=formulario.cleaned_data['nombre']
            email=formulario.cleaned_data['email']
            telefono=str(formulario.cleaned_data['telefono'])
            mensaje=formulario.cleaned_data['mensaje']
            confirmacion="Tu mensaje ha sido enviado"
            send_mail("Consulta de "+nombre, "\n Nombre: "+nombre+"\n Email: "+email+"\n Teléfono: "+telefono+"\n Mensaje: "+mensaje, "merverasotelo@gmail.com", [""], fail_silently=False)
        return render(request,"contacto.html", {"formulario": FormContacto(), "confirmacion":confirmacion})
    else:
        formulario=FormContacto()
        mensaje=""
        return render(request,"contacto.html",{"formulario": formulario})