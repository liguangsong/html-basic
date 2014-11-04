`<iframe>`标签 网页中的框架，在这个框架中可以嵌入一个网页，可以设置框架的大小。

	<iframe src="http://www.taobao.com/" width="400" height="200"></iframe>

下面是`<iframe>`标签中常使用的属性：

height :设置iframe框架的高度

width :设置iframe框架的宽度

frameborder ：设置是否显示框架的边框 1->显示边框  0->不显示边框

    <iframe src="http://www.taobao.com/" frameborder="0" width="400" height="200"></iframe>

longdesc="url" :关联一个页面，这个页面是iframe内容的详细描述

name :设置iframe的名称

scrolling="yes"/"no"/"auto" :iframe框架是否可以显示滚动条

	<iframe src="http://www.taobao.com/" scrolling="yes" width="400" height="200"></iframe>

sandbox ：限制框架内容

sandbox="allow-forms" 允许iframe框架中的表单的提交

sandbox="allow-scripts" 允许iframe框架中使用js脚本访问服务器内容等

sandbox="allow-top-navigation" 允许iframe框架内容是由包含它的html文档导航得来的

sandbox="allow-same-origin" 允许iframe框架的内容来源与包含他得html文档相同

sandbox="" 表示以上四种情况全部受到限制

	<iframe src="http://www.taobao.com/" sandbox="" width="400" height="200"></iframe>

运行上面这段代码，效果如下：

<img src="http://html-basic-images.qiniudn.com/section_11_text_course_21.png" style="width:500px;">

	<iframe src="http://www.taobao.com/" sandbox="allow-same-origin allow-scripts" width="400" height="200"></iframe>

运行上面这段代码，效果如下：

<img src="http://html-basic-images.qiniudn.com/section_11_text_course_31.png" style="width:500px;">