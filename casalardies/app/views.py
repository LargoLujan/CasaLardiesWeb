from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def menu(request):
    return render(request, 'menu.html')


def apartamentos(request):
    return render(request, 'apartamentos.html')


def actividades(request):
    return render(request, 'actividades.html')


def reservas(request):
    return render(request, 'reservas.html')


def contacto(request):
    return render(request, 'contacto.html')

