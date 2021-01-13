from django.contrib import admin
from .models import Contacto

# Register your models here.

class ContactoAdmin(admin.ModelAdmin):
    list_display = ('fecha', 'nombre', 'email')
    readonly_fields = ['fecha']
    date_hierarchy = 'fecha'
    list_filter = ("email",)

admin.site.register(Contacto, ContactoAdmin)