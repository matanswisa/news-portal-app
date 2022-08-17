from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('do_something/', views.do_something),
]
