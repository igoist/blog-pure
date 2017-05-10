# -*-coding:utf-8-*-
from django.db import models

# Product & View -> View
#                -> Product
#           User -> View

info_length = 128

class Product(models.Model):
    index = models.IntegerField()
    name = models.CharField(max_length = 32, blank = False, null = False)
    info = models.CharField(max_length = info_length)
    date_time = models.DateTimeField(auto_now_add = True)  # 创建时间
    is_delete = models.BooleanField(default = False) # delele flag
    def __unicode__(self):
        return self.name
    class Meta:
        ordering = ['index', 'name',]

class View(models.Model):
    index = models.IntegerField()
    name = models.CharField(max_length = 16, blank = False, null = False)
    is_delete = models.BooleanField(default = False) # delele flag
    def __unicode__(self):
        return self.name
    class Meta:
        ordering = ['index', 'name']

class ProductAndView(models.Model):
    index = models.IntegerField()
    info = models.CharField(max_length = info_length, blank = False, null = False)
    p = models.ForeignKey(Product)
    v = models.ForeignKey(View)
    is_delete = models.BooleanField(default = False) # delele flag
    def __unicode__(self):
        return self.info
    class Meta:
        ordering = ['index', 'info']

class User(models.Model):
    index = models.IntegerField()
    name = models.CharField(max_length = 32, blank = False, null = False)
    passwd = models.CharField(max_length = 32, blank = False, null = False)
    tp = models.CharField(max_length = 4, default = '用户')
    v = models.ForeignKey(View)
    date_time = models.DateTimeField(auto_now_add = True)  # 创建时间
    is_delete = models.BooleanField(default = False) # delele flag
    def __unicode__(self):
        return self.name
    class Meta:
        ordering = ['index',  'name', '-date_time',]



