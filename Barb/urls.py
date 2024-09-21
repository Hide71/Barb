
from django.contrib import admin
from django.urls import path, include
from Controle_Financeiro import views

urlpatterns = [
    path('', include('Controle_Financeiro.urls')),  
]
