from django.contrib import admin

from .models import SlideLink

# old way
# class SlideLinkAdmin(admin.ModelAdmin):
#     fields = ('index', 'title', 'describe', 'link')
# admin.site.register(SlideLink, SlideLinkAdmin)

# new in Django 1.7
@admin.register(SlideLink)
class SlideLinkAdmin(admin.ModelAdmin):
    # fields = ('index', 'title', 'describe', 'link')
    list_display = ('index', 'title', 'describe', 'link')
