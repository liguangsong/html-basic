首先，我们先讲一下网页或者文档链接。

Hyperlinks: 点击超链接文本可以浏览当前页面或者其他页面的内容。创建超链接使用`<a>`标签。 a标签的属性：href、hreflang、rel、target、type。

href : 用来接收一个URL。

hreflang : 设置超链接文档的语言（如：hreflang="en"，设置为英文展示），只有当href属性存在使用。

rel : 用于指定当前文档与被链接文档的关系。如 rel="friend"

type : 设定的文档的MINE类型，如:type="text/html"。

target : 表示在哪里打开链接文档。如：

	<a href="http://www.baidu.com" target="_self">百度一下</a>

_self表示在当前窗口当前框架中打开（默认）

_blank 表示在一个新的窗口中打开链接文档

_parent 表示在当前框架的父框架中打开

_top 表示先把所有被包含的框架清除，然后将链接文档展示在整个窗口

framename 表示在特定框架（名为framename）中打开连接文档

下面讲一下一下几种链接：

External Hyperlinks : 创建超链接到其他html页面，href属性设置为以"http://"开始的URL。如：

	<a href="http://www.baidu.com">百度一下</a>

Relative URLs 如果href属性不以可识别的协议（如：http://）开始，而是链接本地的html页面，那么浏览器将这种超链接视为 Relative URLs。如：

	<a href="index.html">首页</a>

Internal Hyperlinks 内部链接，它可以直接跳到当前页面中一个特定的模块，创建内部链接可以使用css的样式id选择器。如下（连接跳转到id="test"的模块）：

	<a href="#test">here</a>
    <br />
	<p id="test"> test.</p>


