这一节我们学习与列表相关的标签，包括：dl、dt、dd、ol、ul、li标签。

下面解释一下dl、dt、dd三种标签

`<dl></dl>`用来创建一个普通的列表,

`<dt></dt>`用来创建列表中一条内容A，

`<dd></dd>`用来创建A内容的一条子内容B，

`<dt></dt>`和`<dd></dd>`都必须放在`<dl></dl>`标志对之间。

以下使用这三种标签的实例：

	<dl>
    	<dt>石家庄景点</dt>
    	<dd>苍岩山 </dd>
    	<dd>赵州桥 </dd>
    	<dd>隆兴寺 </dd>B
    	<dt>上海景点</dt>
    	<dd>豫园 </dd>
    	<dd>东方明珠广播电视塔 </dd>
    	<dd>上海法租界 </dd>
	</dl>

运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_7_text_course_3.png" style="width:500px;">

我们可以看到，`<dt></dt>`中间的文字即时我们没有进行缩进它也会向前靠拢，而`<dd></dd>`中间的内容则自动向后缩进。

下面讲一下有序列表：

`<ol>`表示有序列表，列表中的项目使用`<li>`（`<li>`标签包含列表中的每一条内容）表示，使用代码如下：

	<body>
	我喜欢的水果:
	<ol>
    	<li>苹果</li>
    	<li>梨</li>
    	<li>香蕉</li>
	</ol>
	</body>

展示结果，如下图：

<img src="http://html-basic-images.qiniudn.com/section_7_text_course_4.png" style="width:250px;">

接下来，我们学习一下无序列表：

`<ul>`表示无序排列，列表中的项目使用`<li>`表示，使用代码如下：

	<body>
	我喜欢的水果:
	<ul>
    	<li>苹果</li>
    	<li>梨</li>
    	<li>香蕉</li>
	</ul>
	</body>
展示结果，如下图：

<img src="http://html-basic-images.qiniudn.com/section_7_text_course_51.png" style="width:250px;">

<img src="http://html-basic-images.qiniudn.com/section_7_text_course_8.png" style="width:220px;">
