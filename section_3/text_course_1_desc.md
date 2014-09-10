元标签是使用在网页的head标签之间的一种HTML标签，主要包括关键词标签和描述标签，现在最常用的也是这两类。
与其它的HTML标签不同，元标签不会在页面的任何地方显示出来，所以绝大多数的访问者并不会看到它的存在，而且对网站的权威度是没有影响的。
不同的元标签起着不同的作用，但都是用来提供关于页面的附加信息。比如，description元标签提供页面内容的摘要信息。

* <title>标签，用于定义和设置文档的标题。
* <title>标签定义的文档标题常常显示在浏览器显示本页的选项卡的左上角。
* 每一个HTML文档都必须有且仅有一个<title>标签。
* 标题应该尽可能的向浏览者描述本页的大致内容。
使用<title>设置文档标题：
        <!DOCTYPE HTML>
        <html>
            <head>
               <title>这是描述本文档大概内容的标题</title>
            </head><!--  w w w  . j  a  v a  2s. com-->
            <body>
            </body>
        </html>

base:
* <base> 是一个单标签。
* <base> 用于设置本文档中所有相对链接的基础路径。（如果链接的路径是完整的，则不使用这个基础路径。一个最基本的完整路径应该包括访问协议,主机地址,服务端口）
    注：相对链接是指忽略URL的协议类型，主机地址和端口并以另一个URL作为基础进行访问的链接。
* <base> 有两个属性href和target。href指定基础路径;target指定根据这个路径访问的页面的打开方式（页面打开方式我们会在后面详解）。
使用<base>设置设置文档中所有相对链接的基础路径：
        <!DOCTYPE html>
        <html>
            <head lang="en">
                <meta charset="UTF-8">
                <title>这是标题</title>
                <base href="http://www.baidu.com">
            </head>
            <body>
                <a href="/s?wd=哈哈哈&bs=哈哈">搜索哈哈</a> <!--这个链接会打开百度搜索‘哈哈’关键字的页面-->
                <a href="https://www.google.com">访问google</a>  <!--这个链接会打开google的首页-->
            </body>
        </html>


