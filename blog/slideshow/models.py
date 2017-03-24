#-*-coding:utf-8-*-

from django.db import models

class SlideLink(models.Model):
    index = models.IntegerField()
    title = models.CharField(max_length = 32)  # 标题
    describe = models.CharField(max_length = 32, null = True)  # 描述
    link = models.CharField(max_length = 64, null = True)  # 链接
    date_time = models.DateTimeField(auto_now_add = True)  # 发布时间
    pinned = models.BooleanField(default = False) # 置顶 pinned
    is_delete = models.BooleanField(default = False) # delele flag

    #python2使用__unicode__, python3使用__str__
    def __unicode__(self) :
        return self.title

    class Meta:  #按时间下降排序
        ordering = ['index', '-date_time']