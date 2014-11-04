abbr :标签中包含一段文本的缩写，当使用`<attr>`标签时，可以使用标签中的title属性扩展缩写的文本。如：

	<attr title="Cascading Style Sheets">CSS</attr>

b :将包含在`<b>`标签内的文本字体加粗，一般表示额外的强调或重要性。

bdi : 表示把包含的内容从周围的文档中隔离出来。如：

	<p>我喜欢学习<bdi>HTML</bdi></p>

bdo :覆盖当前文本的方向 以相反的方向展示文本。 使用代码如：

  	 <p>文字从右向左展示。</p>
	   <p><bdo dir="rtl">文字从右向左展示。</bdo></p>

展示效果如：

<img src="http://html-basic-images.qiniudn.com/section_8_text_course_1.png" style="width:300px;">

cite :被包含的内容一般为引用的标题，像书、文章或电影。字体风格为：italic（斜体）。如：

	<cite>HTML</cite>

code :定义一段计算机代码，主要作用是是代码语义更加明确，结构更加清晰。默认字体风格为：monospace。如：

    <code>coding</code>

del :使用del标签，将其包含的内容标记为删除。del标签含有两个可选择的属性 cite 和 datatime 。cite="URL"，指向另一个文档的URL，解释被删除内容的原因； datetime="YYYYMMDD" ，表示内容被删除的时间。如:

	<del cite="http://www.baidu.com" datetime="20141017">删除内容。</del>

dfn :定义一个词或者短语，并解释了这个词或短语的意义。

	<dfn title="Cascading Style Sheets">CSS</dfn>

em :强调文本内容 被此标签包含的内容一般为斜体

	<em>强调文本内容</em>

i :表示文本内容与周围其他内容相比，有不同的含义，如：其他语言的词，技术或科学术语。 i 标签包含的内容显示为斜体（italic）。如：

	<i>Javascript</i>

ins 表示插入内容。ins 含有两个可选择的属性cite和datetime 。cite="URL"，指向另一个文档的URL，解释被插入内容； datetime="YYYYMMDD" ，表示内容插入的时间。如：

	<ins cite="http://www.baidu.com" datetime="20141017">插入内容</ins>

kbd ：表示文本从键盘键入，经常用在与计算机相关的文档或手册中， 字体显示为monospace。

    <kbd>input</kbd>

mark ：表示包含的文本被高亮标记（一般为标记为亮黄色）。

q ：表示内容从其他来源（如：URL）引用 它的属性cite=URL 表示引用来源的地址。

