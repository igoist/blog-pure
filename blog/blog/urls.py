# -*- coding:utf-8 -*-

from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'blog.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^$', 'blog.views.home'),
    url(r'^old/', 'article.views.home'),
    url(r'^article/', include('article.urls')),

    url(r'^resume_templete/$', 'blog.views.resume_templete'),
    url(r'^resume/$', 'blog.views.resume'),
    url(r'^resume_wy/$', 'blog.views.resume_wy'),
    url(r'^resume_smss/$', 'blog.views.resume_smss'),

    url(r'^slideshow/', include('slideshow.urls')),
    url(r'^todolist/', include('todolist.urls')),
)
