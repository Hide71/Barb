from django.shortcuts import render, redirect
from  .models import Transacao
from .forms import TransacaoForm

# Create your views here.
def home(request):
    transacoes = Transacao.objects.all()
    context ={
        'transacoes': transacoes
   }
    return render(request, 'controle/home.html', context)

def transacoes(request):
   transacoes = Transacao.objects.all()
   context ={
        'transacoes': transacoes
   }
   return render(request, 'controle/transacoes.html', context)

def transacao_add(request):
    form = TransacaoForm(request.POST or None)
    print(form)
    if request.POST:
        if form.is_valid():
            form.save()
            return redirect('home')     

    return render(request, 'controle/transacao_add.html', {'form': form })

def transacao_edit(request, transacao_id):
    transacao = Transacao.objects.get(id=transacao_id)  
    print (transacao) 
    form = TransacaoForm(request.POST or None, instance=transacao)
    if request.POST:
            if form.is_valid():
                form.save()
                return redirect('transacoes')
        
    context ={
        'transacao':transacao,
        'form':form
    }    
    return render(request, 'controle/transacao_edit.html',context)

def transacao_delete(request, transacao_id):
    transacao = Transacao.objects.get(id= transacao_id)
    transacao.delete() 
    return redirect('transacoes')
