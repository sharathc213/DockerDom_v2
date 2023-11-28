from . import views
from django.contrib import admin
from django.urls import path,include



urlpatterns = [
   
    # path('',views.SignIn,name='SignIn'),
    path('',views.Dashboard,name='Dashboard'),
    # path('SignUp',views.SignUp,name='SignUp'),
    # path('Dashboard',views.Dashboard,name='Dashboard'),
    # path('Dashboard/<str:page>/',views.Dashboard,name='Dashboard'),
    # path('get_categories',views.get_categories,name='get_categories'),
    # path('feedback_form',views.feedback_form,name='feedback_form'),
    # path('description_data',views.description_data,name='description_data'),
    # path('get_item',views.get_item,name='get_item'),

   
    
]