
`<base>` 是一个单标签,即没有对应的结束标签。
`<base>` 用于设置本文档中所有相对链接的基础路径。（如果链接的路径是完整的，则不使用这个基础路径。一个最基本的完整路径应该包括访问协议,主机地址,服务端口）
    注：相对链接是指忽略URL的协议类型，主机地址和端口并以另一个URL作为基础进行访问的链接。
`<base>` 有两个属性href和target。href指定基础路径;target指定根据这个路径访问的页面的打开方式（页面打开方式我们会在后面详解）。
使用`<base>`设置设置文档中所有相对链接的基础路径：

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


