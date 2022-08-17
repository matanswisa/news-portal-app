from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import NewsPosts

# Create your views here.
# NOTE - in python views are the http requests


def fetch_news(request):
    if request.method == 'GET':    
        news = list(NewsPosts.objects.all().order_by('title').values())
        print(news)
        return JsonResponse(news, safe=False)



    # return render(request, 'index.html',  {'name': 'matan', 'age': '22'})
