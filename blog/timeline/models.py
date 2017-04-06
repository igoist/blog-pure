#-*-coding:utf-8-*-

from django.db import models

class TimeLineItems(models.Model):
    index = models.IntegerField()
    div_class = models.CharField(max_length = 32)  # 样式 class
    h2 = models.CharField(max_length = 32)  # h2 标题
    p = models.TextField(blank = True, null = True) # p 内容描述 max_length = 152
    a = models.CharField(max_length = 32, null = True)  # a 操作 Call to action
    a_href = models.CharField(max_length = 64, default = '#')  # 链接
    img_url = models.CharField(max_length = 64, null = True)  # 链接
    date_time = models.DateTimeField(auto_now_add = True)  # 发布时间, time 由其字符串操作而来
    is_delete = models.BooleanField(default = False) # delele flag

    #python2使用__unicode__, python3使用__str__
    def __unicode__(self) :
        return self.h2

    class Meta:  #按时间下降排序
        ordering = ['index', '-date_time',]