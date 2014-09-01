head标签里主要得几个标签有

    meta, link, script, title
    
在IE上，我们打开一个页面，会在窗口上方显示一些文字，这些文字就是通过HTML的标签title设置的。
这里只是举个例子，我们不推荐IE。但是在别的浏览器上，tab一多容易看不到title

title对于搜索引擎优化很重要。同样重要的还有meta。搜索引擎优化（SEO）是为了让搜索引擎更容易搜到你的网站，不能忽视。

meta 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

    <meta name="keywords" content="HTML,CSS,Javascript,在线编程,在线学习">

再比如，规定浏览器用什么编码来解析这个html页面：
    
    <meta http-equiv="charset" content="utf-8">

script标签常用来引入javascript和html template，link则常用来引入css。它们不止用来做这些事情，但是一般也没人用它们来做别的。
