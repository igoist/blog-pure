# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, Http404

def home(request):
    return render(request, 'home2.html')



# 几个单独的旧版本简历
def resume(request):
    return render(request, 'resume/resume.html')
    #return HttpResponse("World");

def resume_wy(request):
    return render(request, 'resume/resume_wy.html')

def resume_smss(request):
    return render(request, 'resume/resume_smss.html')

def resume_templete(request):
    return render(request, 'resume/resume_templete.html')

# 先搞毕设，和深入学习 js，看下爬虫，再回过头来整理这些个