from django.db import models
import datetime


# Create your models here.
class Transacao(models.Model):
    descricao= models.CharField(max_length=200)
    valor = models.FloatField(default=0.00)
    data = models.CharField(max_length=12)


    def __str__(self):
        return f"{self.descricao} - {self.valor} - {self.data}"