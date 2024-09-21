from .models import Transacao
from django import forms
from logging import PlaceHolder

class TransacaoForm(forms.ModelForm):
    class Meta:
        model = Transacao
        fields = ('descricao', 'valor', 'data')