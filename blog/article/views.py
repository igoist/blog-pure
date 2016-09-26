# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse
from article.models import Article
from datetime import datetime

def home(request):
    post_list = Article.objects.all()  #获取全部的Article对象
    return render(request, 'home.html', {'post_list' : post_list})
