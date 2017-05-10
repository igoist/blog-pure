# -*-coding:utf-8-*-
from django.contrib import admin

from .models import View, User, Product, ProductAndView

@admin.register(View)
class ViewAdmin(admin.ModelAdmin):
    list_display = ('index', 'name', 'is_delete')

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('index', 'name', 'tp')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('index', 'name', 'info')

@admin.register(ProductAndView)
class ProductAndViewAdmin(admin.ModelAdmin):
    list_display = ('index', 'info', 'p', 'v')