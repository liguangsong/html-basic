首先，我们学习一下六种H标签，分别为h1，h2，h3，h4，h5，h6

H标签设置文字模块的标题，不同级别的标题，使用不同的h标签，`<h1>`标签级别最高。每一对H标签将其里面的内容作为一个独立的模块。如下为H标签的使用：

	<h1>我是H1</h1>
	<h2>我是H2</h2>
	<h3>我是H3</h3>
	<h4>我是H4</h4>
	<h5>我是H5</h5>
	<h6>我是H6</h6>

网页中的运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_6_text_course_2.png" style="width:253px"/>

在网页设计中，有时会将多个标题进行组合，这时`<hgroup>`可以对封装多个h标签，不影响html文档的大纲。代码使用如下：

	<hgroup>
    	<h3>Hello</h3>
		<h3>World</h3>
    </hgroup>
