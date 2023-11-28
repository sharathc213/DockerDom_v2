
from . import views
from django.contrib import admin
from django.urls import path,include



urlpatterns = [
   
    # path('',views.SignIn,name='SignIn'),
    path('search_new_image',views.search_new_image,name='search_new_image'),
    path('search_image_ajax',views.search_image_ajax,name='search_image_ajax'),
    path('pull_image_ajax',views.pull_image_ajax,name='pull_image_ajax'),
    path('local_images',views.local_images,name='local_images'),
    path('local_image_ajax',views.local_image_ajax,name='local_image_ajax'),
    path('delete_image_ajax',views.delete_image_ajax,name='delete_image_ajax'),
    path('image_log_ajax',views.image_log_ajax,name='image_log_ajax'),
    # path('Dashboard/<str:page>/',views.Dashboard,name='Dashboard'),
    # path('get_categories',views.get_categories,name='get_categories'),
    # path('feedback_form',views.feedback_form,name='feedback_form'),
    # path('description_data',views.description_data,name='description_data'),
    # path('get_item',views.get_item,name='get_item'),

   
    
]