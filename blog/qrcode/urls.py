# -*- coding:utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.qrcode, name='qrcode'),
    url(r'^api/$', views.api_pv, name='api'),
    url(r'^api_p/$', views.api_p, name='api_p'),
    url(r'^api_v/$', views.api_v, name='api_v'),
]