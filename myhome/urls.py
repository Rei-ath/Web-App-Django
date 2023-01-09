from django.contrib import admin
from django.urls import path , include

from myhome import views

urlpatterns = [
    path('', views.loginPage,name="index"),
    path('home', views.index,name="index"),
    path('products', views.products,name="products"),
    path('about', views.about,name="about"),
    path('signup', views.signupPage,name="signup"),
    path('login', views.loginPage,name="login"),
    path('logout', views.logOutPage,name="logOut")
]
