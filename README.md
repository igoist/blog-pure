# Ready for Big Change

* Reset the Homepage

（记录一下步骤）
1. 加入 base2.html home2.html 修改 blog.urls，添加 blog.view.home （旧的可通过 "old/" 继续去访问）
2. 修改 base2.html，基本删光了旧的内容，移入 et-navgator 与相关 css、js
（committed）
3. 考虑到要将 base2 作为通用页面模块，将前面写在 base2.html 中的 sun-rise、shield 模块移到 home2.html 中（文件有重命名后面再考虑）
（关于将 shield.css 、sunrise.css 移到 home2.html 中的相关疑问，再思考思考）
4. 在 slideshow.models 中实现 model -- "SlideLink"，并在 admin 中注册，其主要 field 如下:
  ---- index 编号，排序用
  ---- title，即 header
  ---- describe，for \<small\>
  ---- link，具体链接，不用多讲
5. 内容添加不消说。把 api 写出来
6. base.js 中去调用并完成测试