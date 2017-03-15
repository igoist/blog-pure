# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, Http404
from todolist.models import Task
import json

def api(request):
    task_list = Task.objects.all()  # get all objects
    # the way that return string
    # tmp_str = ""
    # for i in task_list:
    #     # now difference without '\n'
    #     tmp_str += "<h3>Index: " + str(i.index) + '</h3>'
    #     tmp_str += "<h3>Title: " + i.title + '</h3>'
    #     tmp_str += "<h3>Content: " + i.content + '</h3>'
    #     tmp_str += ''
    # return HttpResponse(tmp_str)
    # return the json array
    obj_array = []
    for i in task_list:
        # 居然有这么一个坑 to my surprise, there can be such a hole
        tmp_obj = {}
        # no difference without '\n'
        tmp_obj["index"] = i.index
        tmp_obj["title"] = i.title
        tmp_obj["content"] = i.content
        obj_array.append(tmp_obj)
    return HttpResponse(json.dumps(obj_array))
    # return HttpResponse(obj_array)