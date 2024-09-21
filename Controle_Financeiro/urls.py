from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('transacoes', views.transacoes, name="transacoes"),
    path('transacao_add', views.transacao_add, name='transacao_add'),
    path('transacao_edit/<int:transacao_id>', views.transacao_edit, name='transacao_edit'),
    path('transacao_delete/<int:transacao_id>', views.transacao_delete, name='transacao_delete'),
]