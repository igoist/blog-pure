# -*- coding:utf-8 -*-

from django import template
from django.template.defaultfilters import stringfilter
# from django.utils.encoding import force_text
# from django.utils.safestring import mark_safe

register = template.Library()   #自定义filter时必须加上

@register.filter(is_safe=True)  # 注册cut
@stringfilter                   # 希望字符串作为参数
def th_cut(value, arg):
    """Removes all values of arg from the given string"""
    return value[:int(arg)]