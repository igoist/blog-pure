# -*- coding:utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.slideshow, name='slideshow'),
    url(r'^test/$', views.test, name='test'),
    url(r'^emmet/$', views.emmet, name='emmet'),
]