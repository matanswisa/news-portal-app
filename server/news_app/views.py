from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# NOTE - in python views are the http requests


def do_something(request):
    x = 5
    # return HttpResponse('i responsible for printing this message')
    return render(request, 'index.html',  {'name': 'matan', 'age': '22'})
