#-*-coding:utf-8-*-
from django.shortcuts import render

def slideshow(request):
    return render(request, 'slideshow.html', {})

# Emmet usage in README.md
def emmet(request):
    return render(request, 'slideshow_content_emmet.html', {})

def test(request):
    return render(request, 'slideshow_index.html', {})



from django.http import HttpResponse, Http404
from .models import SlideLink
import json

def api_link(request):
    # task_list = SlideLink.objects.all()  # get all objects
    link_list = SlideLink.objects.filter(is_delete=False)  # filter

    obj_array = []
    for i in link_list:
        tmp_obj = {}
        tmp_obj["index"] = i.index
        tmp_obj["title"] = i.title
        tmp_obj["describe"] = i.describe
        tmp_obj["link"] = i.link
        tmp_obj["pinned"] = i.pinned
        # tmp_obj["date_time"] = i.date_time # no need
        obj_array.append(tmp_obj)
    return HttpResponse(json.dumps(obj_array))
