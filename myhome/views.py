from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages


@login_required
def index(request):
    if request.user.is_anonymous:
        return render(request, 'login.html')
    # ...
    else:
        return render(request, 'index.html')


@login_required
def products(request):
    return render(request, 'products.html')


@login_required
def about(request):
    return render(request, 'about.html')


def signupPage(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirmPassword = request.POST.get('confirmPassword')
        if (password == confirmPassword):

            user = authenticate(request, username=username, password=password)

            if user is not None:
                messages.warning(request, 'Already in use Try Login instead')
                logout(request)
                return render(request,'login')
            else:
                print(username, email, password, confirmPassword)
                User.objects.create_user(username=username, password=password)
                messages.success(request, 'done new user added successfully')
                return render(request,'login')
        else:
            messages.warning(request, 'Password Not matching')

    return render(request, 'signup.html')


def loginPage(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return render(request, 'index.html')
    else:

        print(username, password)
        return render(request, 'login.html')


def logOutPage(request):
    logout(request)
    return redirect('login')
