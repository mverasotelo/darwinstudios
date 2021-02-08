from django.conf import settings
from django.http import HttpResponse
import datetime
from django.template import Template,loader
from django.template.loader import get_template
from django.shortcuts import render
from django.core.mail import EmailMultiAlternatives
from .forms import FormContacto

def index(request):
    return render(request,"index.html")

def espacios(request):
    return render(request,"espacios.html")

def producciones(request):
    return render(request,"producciones.html")

def nosotros(request):
    return render(request,"nosotros.html")

def contacto(request):
    if request.method=="POST":
        confirmacion=""
        formulario=FormContacto(request.POST)   
        if formulario.is_valid():
            formulario.save()
            nombre=formulario.cleaned_data['nombre']
            email=formulario.cleaned_data['email']
            telefono=str(formulario.cleaned_data['telefono'])
            mensaje=formulario.cleaned_data['mensaje']
            text_content = "Nombre: "+nombre+"\n Email: "+email+"\n Teléfono: "+telefono+"\n Mensaje: "+mensaje
            html_content = "<div style='padding:2rem;background:black;color:white;font-size:1rem'><h1 style='color:#f8a52d'>Darwin Studios</h1><p>Nombre: "+nombre+"</p><p>Email: "+email+"</p><p>Teléfono: "+telefono+"</p><p>Mensaje:<br>"+mensaje+"</p></div>"
            msg = EmailMultiAlternatives("Consulta de "+nombre, text_content, "", ["info@darwinstudios.com.ar"])
            msg.attach_alternative(html_content, "text/html")
            msg.send(fail_silently=False)
            confirmacion="¡Muchas gracias por pensar en Darwin Studios!"
            return render(request,"contacto.html", {"formulario": FormContacto(), "confirmacion":confirmacion})
        else:
            confirmacion="Mensaje no enviado. Revisá que que tu e-mail esté escrito correctamente."
            return render(request,"contacto.html", {"formulario": FormContacto(request.POST), "confirmacion":confirmacion})
    else:
        formulario=FormContacto()
        mensaje=""
        return render(request,"contacto.html",{"formulario": formulario})