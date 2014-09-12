
- `<meta>` 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。  
- `<meta>` 标签位于文档的头部，不包含任何内容。`<meta>` 标签的属性定义了与文档相关联的名称/值对。    
- `<meta>` 标签有多种不同的用途和表现方式.一个html文档中可以包含多个`<meta>`标签.     
- `<meta>` 标签永远位于 head 元素内部。     
- 元数据总是以名称/值的形式被成对传递的。       
- `<meta>`有几个常见的本地属性:name,content,charset以及http-equiv,content属性始终要和name属性或http-equiv属性一起使用。    

常见的name属性值(把content属性关联到一个名称)有:   
    &nbsp;&nbsp;&nbsp; author : 指定当前页面的作者   
    &nbsp;&nbsp;&nbsp; description : 对当前页面的描述   
    &nbsp;&nbsp;&nbsp; generator : 指定生成该页面的软件的名称     
    &nbsp;&nbsp;&nbsp; keywords : 指定该页面的关键字(主要用于搜索引擎对本页面的搜索,指定恰当的关键字,有利于搜索引擎找到本页面)    

常见的http-equiv属性值(把content属性关联到http头部)有:       
    &nbsp;&nbsp;&nbsp; content-type : 指定文档类型     
    &nbsp;&nbsp;&nbsp; expires : 用于指定文档过期的时间         
    &nbsp;&nbsp;&nbsp; refresh : 用于文档的自刷新         
    &nbsp;&nbsp;&nbsp; set-cookie : 用于设置cookie       

下面是一个使用`<meta>`页面例子:

    <!DOCTYPE html>
    <html>
        <head lang="en">
        
            <meta charset="UTF-8">  
            <!--设置该文档的编码-->
            <meta name="author" content="超级玛丽">   
            <!--指定该文档的作者是'超级玛丽'-->
            <meta name="description" content="简单举例meta的用法和常见属性">  
             <!--对本文档的简单描述-->
            <meta name="keywords" content="meta,html,meta标签的简单介绍">  
             <!--设置本文档的关键字,便于搜索引擎搜索.关键字之间用逗号隔开-->
            <meta http-equiv="content-type" content="text/html">   
            <!--指定当前文档是html类型的文本-->
            <meta http-equiv="expires" content="31 dec 2014">   
            <!--设置文档在浏览器缓存中的过期日期-->
            <meta http-equiv="refresh" content="3;url=http://www.baidu.com">   
            <!--3秒后,自动跳转到百度首页.如果没有设置url,则实现3秒后页面自动刷新.-->
            
            <title>这是标题</title>
        </head>
        
        <body>
        </body>
    </html>