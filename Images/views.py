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
import requests
import docker
import logging
import os

# from Admin.models import Categories,Item
from django.http import JsonResponse
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


image_logger = logging.getLogger('image_logger')

# @login_required

def search_new_image(request):

    return render(request, 'Images/search_new_image.html',{"page":1})

def search_image_ajax(request):
    if request.method=='POST':
        page_size = 12
        results = []
        search_keyword = request.POST.get('keyword')
        page = int(request.POST.get('page'))
         
        url = f'https://hub.docker.com/v2/search/repositories/?query={search_keyword}&page={page}&page_size={page_size}'
    
        try:
            response = requests.get(url)
            response.raise_for_status()  

            result_data = response.json()
            results = result_data.get('results', [])

        except requests.exceptions.RequestException as e:
            print(f"Error: {e}")
      
        return render(request, 'Images/Ajax/search_image_ajax.html',{"result":results,"keyword":search_keyword,"page":page})

client = docker.from_env()
# client = docker.DockerClient(base_url='tcp://35.244.27.235:2375')



def pull_image_ajax(request):
    if request.method == 'POST':
        img_name = request.POST.get('image')
        try:
            # Pull the Docker image
            res = client.images.pull(img_name)
            image_logger.info(f'Docker image {img_name} successfully pulled.')
            return JsonResponse({'msg': 'success'})
        except Exception as e:
            image_logger.error(f'Error pulling Docker image {img_name}: {e}')
            return JsonResponse({'msg': 'error'})

def local_images(request):
    return render(request, 'Images/local_images.html')

def local_image_ajax(request):
    if request.method == 'POST':
        keyword=request.POST.get('keyword')
        images =[]
        try:
        # Get a list of all Docker images
            images = client.images.list()
            results=[image for image in images if any(tag.startswith(keyword) for tag in image.tags)]
       
        except docker.errors.APIError as e:
            print(f'Error listing images: {e}')
        return render(request, 'Images/Ajax/local_images_ajax.html',{"result":results,"keyword":keyword})

        
def delete_image_ajax(request):
    if request.method == 'POST':
        image = request.POST.get('image')
        try:
            # Remove the Docker image
            client.images.remove(image)
            image_logger.info(f'Docker image {image} successfully deleted.')
            return JsonResponse({'msg': 'success'})
        except docker.errors.ImageNotFound:
            image_logger.error(f'Docker image {image} not found.')
            return JsonResponse({'msg': 'error'})
        except docker.errors.APIError as e:
            image_logger.error(f'Error deleting Docker image {image}: {e}')
            return JsonResponse({'msg': 'error'})

def image_log_ajax(request):
    if request.method == 'POST':
        log_file_path = os.path.join(BASE_DIR, 'log', 'image.log')

        try:
            with open(log_file_path, 'r') as log_file:
                logs = log_file.readlines()
        except FileNotFoundError:
            logs = []

        return render(request, 'Images/Ajax/image_log_ajax.html', {'logs': logs})
