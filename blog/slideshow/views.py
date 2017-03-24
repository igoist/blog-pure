#-*-coding:utf-8-*-
from django.shortcuts import render

def slideshow(request):
    return render(request, 'slideshow.html', {})

# Emmet usage in README.md
def emmet(request):
    return render(request, 'slideshow_content_emmet.html', {})

def test(request):
    return render(request, 'slideshow_index.html', {})