from django.shortcuts import render
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login,logout
from django.contrib.auth.models import User,auth
# from .models import PublicUser
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.urls import reverse
# from .models import Feedback
from django.conf import settings
from django.contrib.auth.forms import AuthenticationForm
# from django_ratelimit.decorators import ratelimit
# import bleach
import json
# from Admin.models import Categories,Item
from django.http import JsonResponse


# def sanitize_input(data):
#     # Define allowed HTML tags and attributes
#     tags = bleach.sanitizer.ALLOWED_TAGS.copy()
#     tags.update(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])  # Merge with custom tags

#     allowed_attributes = bleach.sanitizer.ALLOWED_ATTRIBUTES
#     custom_attributes = ['class', 'data-attribute']  # Add any custom attributes you want to allow
#     attributes = list(allowed_attributes) + custom_attributes

#     # Sanitize the input data
#     return bleach.clean(data, tags=tags, attributes=attributes)

# # @ratelimit(key='ip', rate='5/h', block=False)
# def SignIn(request):
#     if request.method == 'POST':
#         form = AuthenticationForm(request, data=request.POST)
#         if form.is_valid():
#             remember_me = request.POST.get('remember_me')  # Get the "Remember Me" checkbox value
#             user = authenticate(request, username=form.cleaned_data['username'], password=form.cleaned_data['password'])
#             if user is not None and not user.is_superuser:
               
#                 login(request, user)
#                 messages.success(request, 'Login Successfully')
#                 if not remember_me:
#                     request.session.set_expiry(0)  # Session expires on browser close
#                 else:
#                     request.session.set_expiry(settings.SESSION_COOKIE_AGE)  # Session expires in 2 weeks
#                 return redirect('/Dashboard/Dashboard/')
#             else:
#                 messages.error(request, 'Invalid details')  
#         else:    
#             messages.error(request, 'Invalid details')
#             return redirect('/')    
#     else:
#         form = AuthenticationForm(request)
#     if request.user.is_authenticated and not request.user.is_superuser:
#         messages.success(request,'User Already Authenticated')
#         return redirect('/Dashboard/Dashboard/')
    
#     return render(request, 'SignIn.html',{'form': form})


# # @ratelimit(key='user', rate='3/d', method='POST', block=True)
# def SignUp(request):
#     if request.method=='POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         email = request.POST.get('email')
#         print(username)
#         if not username or not password or not email:
#             messages.error(request, 'Please provide all required fields.')
#             return redirect('SignUp')
#         if User.objects.filter(username=username):
#             messages.info(request,'username Already Taken')
#             return redirect('SignUp')
#         if User.objects.filter(email=email):
#             messages.info(request,'email Already Taken')
#             return redirect('SignUp')  
#         user = User.objects.create_user(username=username,email=email,password=password)
#         user.save()
#         messages.success(request, 'Registration successful. You can now log in.')
#         return redirect('/')
#     return render(request,'SignUp.html')


# @login_required
# def Dashboard(request, page=None):
#     if not request.user.is_superuser:
#         if page is None:
#             page = "Dashboard"
#         else:
#             page = page

#         try:
#             category_list = list(Categories.objects.all().values())
#             category_list = [category for category in category_list if category['visibility']]
           


#             # item_list=list(Item.objects.all().values())
#             # item_list = [item for item in item_list if item['visibility']]
#             # print(item_list)
#             # all_items = Item.objects.all()
#             # for item in all_items:
#             #     print("Item:", item.item)
#             #     print("Visibility:", item.visibility)
#             #     print("Category:", item.category.category)  # Access category name from related Categories model
#             #     print("---")

#         except Exception as e:
#             messages.error(request, f'An error occurred while retrieving data: {str(e)}')
#             category_list = []

#         return render(request, 'Public/Public-Dashboard.html', {'page': page, 'user': request.user, 'category_list': category_list})
#     else:
#         return redirect('SignIn')

def Dashboard(request):
    return render(request, 'Dashboard/Dashboard.html')