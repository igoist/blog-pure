# -*- coding:utf-8 -*-
from django.db import models

class Task(models.Model) :
    index = models.IntegerField()
    title = models.CharField(max_length = 100)  # 标题
    content = models.TextField(blank = True, null = True)  # 主要内容
    date_time = models.DateTimeField(auto_now_add = True)  # 发布时间
    pinned = models.BooleanField(default = False) # 置顶 pinned
    do_flag = models.BooleanField(default = False) # Undo or Done
    is_delete = models.BooleanField(default = False) # Undo or Done

    #python2使用__unicode__, python3使用__str__
    def __unicode__(self) :
        return self.title

    class Meta:  #按时间下降排序
        ordering = ['index', '-date_time']



