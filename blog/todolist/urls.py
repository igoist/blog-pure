# -*- coding:utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.slideshow, name='slideshow'),
    url(r'^api/$', views.api, name='api'),
]