# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import Product, View, ProductAndView, User
import json




def api_pv(request):
    list = ProductAndView.objects.filter(is_delete=False)  # get all objects
    obj_array = []
    for i in list:
        tmp_obj = {}
        tmp_obj['index'] = i.index
        tmp_obj['info'] = i.info
        tmp_obj['p'] = i.p.name
        tmp_obj['v'] = i.v.name
        obj_array.append(tmp_obj)
    return HttpResponse(json.dumps(obj_array))