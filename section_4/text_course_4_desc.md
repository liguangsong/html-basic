`<nav>`元素代表一个部分包含链接，链接到其他页面或者同一页面的其他部分，主要定义了文档中的导航部分。
代码如下：

	<nav>
    	More Information: <a href="http://www.codefordream.com/">Learn More About</a>
    	<a href="http://www.codefordream.com/">Learn More About</a>
	</nav>

以下是布局文档的几种带有不同意义的标签

1.`<details>`用于描述某个文档或者部分模块的细节。与 `<summary>` 标签 配合使用可以为 details 定义标题。标题是可见的，用户点击标题时，会显示出 details。
代码如下：

	<details>
		<summary>Copyright 2011.</summary>
		<p>All pages and graphics on this web site are the property of W3School.</p>
	</details>
视图展示如下：

<img src="http://html-basic-images.qiniudn.com/section_6_text_course_31.png" style="width:500px;">

2.`<header>`标签可以包含任何内容，通常修饰文档或文章的标题，可以包含一个`<h1>`~`<h6>`的标签，或一个`<hgroup>`标签，也可以包含`<nav>`标签。 `<footer>`标签通常包含文档的摘要信息部分或者作者，版权信息。使用代码如下：

	<header>
        <h1>我是header标题H1</h1>
    </header>
    <p>正文</p>
    <footer id="mainFooter">
        codefordream.com 2014. <a href="http://www.codefordream.com/">Visit</a>
    </footer>
运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_6_text_course_52.png" style="width:299px;">

3.`<aside>`标签布局与当前文档内容相关却在此文档内容之外的内容，如：一片文章或者杂志专题的侧边栏，如下图展示：

<img src="http://html-basic-images.qiniudn.com/section_6_text_course_42.png" style="width:500px;">
