这一课，我们学习关于嵌入元素的标签。

`<img>`标签：用于网页中加载一张图片，没有结束标签。常用的属性如下：

src=url  图片路径，嵌入图片时，必须设置src属性（可以使本地相对路径，也可以是图片网址）

alt=”美丽的图片” 图片的替代文本，即如果没有成功加载图片，显示的文本。

width=”200” height=”100” 设置图片的宽度和高度

	<img src="http://ts1.mm.bing.net/th?id=HN.607988484064152362&pid=1.7" alt="壁纸" width="270" height="200">

加载图片展示效果如下：

<img src="http://html-basic-images.qiniudn.com/section_11_text_course_1.png" style="width:320px;">

下面看一下给图片设置一个链接：

	<a href="http://www.codefordream.com/">
    	<img src="http://ts1.mm.bing.net/th?id=HN.607988484064152362&pid=1.7" alt="壁纸" width="100" height="100">
	</a>

应用效果：点击加载的图片，网页跳转到"http://www.codefordream.com"页面。

`<img>`标签还可以帮助地图实现对其不同区域的操作。如下：

	<p>
    	<img src="http://ts1.mm.bing.net/th?id=HN.607988484064152362&pid=1.7" alt="壁纸" width="200" height="200" usemap="#map">
	</p>
	<map name="map">
    	<area href="a.html" shape="rect" coords="0,0,100,100" alt="test a" />
    	<area href="b.html" shape="rect" coords="100,0,200,100" alt="test b" />
    	<area href="c.html" shape="default" alt="test c" />
	</map>

