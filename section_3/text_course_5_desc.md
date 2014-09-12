- `<link>`标签,在html文档和外部样式(css)文件之间建立连接
- `<link>`的本地属性有: href, rel, hreflang, media, type, sizes   
&nbsp;&nbsp;&nbsp; href : 指向外部文件的url,通常使用相对路径.  
&nbsp;&nbsp;&nbsp; hreflang : 指定引入文件的语言类型  
&nbsp;&nbsp;&nbsp; media : 指定该引入文件在什么设备中运行(参考前一节`<style>`标签)   
&nbsp;&nbsp;&nbsp; rel : 指定文档和引入文件之间的关系   
&nbsp;&nbsp;&nbsp; sizes : 统一引入文件中图标的大小   
&nbsp;&nbsp;&nbsp; type : 指定引入文件的MIME类型.例如: text/css 或 image/x-icon   
- 'sizes'属性是在html5中新定义的,废弃了属性'charset', 'rev'和'target'
- 'rel'属性指定了浏览器以什么样的方式解析引入的文件.下面是'rel'属性常用的值
&nbsp;&nbsp;&nbsp; alternate : 链接文档的一个备用版本.例如翻译成另外一中语言的本版     
&nbsp;&nbsp;&nbsp; author : 链接文档的作者   
&nbsp;&nbsp;&nbsp; help : 链接到与当前文档相关的帮助信息     
&nbsp;&nbsp;&nbsp; icon : 指定链接为一个图标资源       
&nbsp;&nbsp;&nbsp; pingback : 指定一个'pingback'服务,它会在别的网站链接到它是自动向日志发出通知.     
&nbsp;&nbsp;&nbsp; prefetch : 定义预加载链接的资源     
&nbsp;&nbsp;&nbsp; license : 链接到与当前文档相关的许可证     
&nbsp;&nbsp;&nbsp; stylesheet : 加载外部css样式文件  

为了展示`<link>`的用法,我们首先创建一个名为'styles.css'的样式表文件,其中内容为:  

    a  {
        background-color: grey;
        color: red;
        padding: 0.5em;
    }
    
要应用这个样式表，我们在'styles.css'所在目录创建包含如下内容的html文档:

    <!DOCTYPE HTML>
    <html>
        <head>
          <link rel="stylesheet" type="text/css" href="styles.css" />
        </head>
        <body>
          <p>This is a test.</p>
          <a href="http://www.codefordream.com">Visit CodeForDream</a>
        </body>
    </html>
    
在浏览器中打开这个html文档,会发现'Visit CodeForDream'为红色,背景为灰色.

你可以在html文档中使用多个`<link>`标签多个外部文件.同一个样式表文件,可以被多个html文档加载.

###favicon
链接元素还可以定义与页面相关联的图标.让指定的图标显示在文档标题前.  
通常使用32*32像素后缀名为.ico的图像文件,浏览器普遍支持这种格式.  

例如: 
    
    <!DOCTYPE HTML>
    <html>
        <head>
             <link rel="shortcut icon" type="image/png" href="/images/mouse-ico.png">
        </head>
        <body>
          <p>This is a test.</p>
          <a href="http://www.codefordream">Visit CodeForDream</a>
        </body>
    </html>

浏览器加载该页面是,就会加载图标并显示在文档标题之前.