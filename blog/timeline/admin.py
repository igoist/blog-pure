from django.contrib import admin

from .models import TimeLineItems

# new in Django 1.7
@admin.register(TimeLineItems)
class TimeLineItemsAdmin(admin.ModelAdmin):
    # fields = ('index', 'title', 'describe', 'link')
    list_display = ('index', 'div_class', 'h2', 'p')
