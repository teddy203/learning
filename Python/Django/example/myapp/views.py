from django.shortcuts import render 

def index(request):
    return render (request, 'index.html')

def about(request):
    return render(request, 'about.html')

# from django.http import HttpResponse

# def welcome(request):
#     return HttpResponse('Hello world')
