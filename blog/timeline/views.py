# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import TimeLineItems
import json

def api(request):
    list = TimeLineItems.objects.filter(is_delete=False)  # get all objects
    obj_array = []
    for i in list:
        tmp_obj = {}
        tmp_obj["index"] = i.index
        tmp_obj["time"] = i.date_time.__str__()[:10]
        tmp_obj["div_class"] = i.div_class
        tmp_obj["h2"] = i.h2
        tmp_obj["p"] = i.p
        tmp_obj["a"] = i.a
        tmp_obj["a_href"] = i.a_href
        tmp_obj["img_url"] = i.img_url
        obj_array.append(tmp_obj)
    return HttpResponse(json.dumps(obj_array))
