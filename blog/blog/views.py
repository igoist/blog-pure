# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, Http404

def resume(request):
    return render(request, 'resume/resume.html')
    #return HttpResponse("World");
