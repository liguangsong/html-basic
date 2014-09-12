
`<script>`标签可以用于在html页面中加入脚本语言.既允许将脚本写在页面中,也可以引入外部脚本文件.

`<script>`的'type'属性最长用的值为'JavaScript'

任何类型的脚本语言都可以使用`<script>`引入

`<script>`是双标签,开始标签和结束标签必须成对出现.如: `<script> </script>`

`<script>`的本地属性有: type, src, defer, async, charset.
属性'type'在html5规范中是可选的,因为html5中的默认脚本语言是'JavaScript'.属性'async'和'defer'是html5中新定义的.     
&nbsp;&nbsp;&nbsp; type : 指定脚本语言类型,在html5中这个属性可以省略  
&nbsp;&nbsp;&nbsp; src : 指定要引入的外部脚本文件的url(通常使用相对路径)  
&nbsp;&nbsp;&nbsp; defer: 指定如何解析脚本.只能与'src'属性一起使用。   
&nbsp;&nbsp;&nbsp; async : 指定是否异步执行引入的脚本.只能与'src'属性一起使用  
&nbsp;&nbsp;&nbsp; charset : 指定外部脚本文件的编码类型.只能与'src'属性一起使用   

###内联脚本
js脚本直接写在`<script>`标签中:


    <!DOCTYPE HTML>
    <html>
        <head>
            <script>
                document.write("This is from  the   script");
            </script>
        </head>
        <body>
           <p>This is a test.</p>
           <a href="http://java2s.com">Visit  java2s.com</a>
        </body>
    </html>

默认情况下,当加载页面编译到`<script>`标签时,脚本就会被执行.通常我们把脚本写在`<head>`中.但内联脚本的情况下,你也可以将`<script>`写在页面的任何位置.

###外联脚本
通过`<script>`的'src'属性加载外部脚本文件.

新建一个名为'simple.js'的文件,内容为:
    
    document.write("This is from  the   external script");
    
这个文件中包含一条语句,然后我们可以使用`<script>`的'src'属性来引用它   
当`<script>`使用了'src'属性时,那么它的内容必须为空(即不能在`<script>`中再编写脚本).
换句话说就是:不能使用同一个`<script>`标签来编写内联脚本又引用外部脚本文件.

使用`<script>`引用外部脚本文件:

    <!DOCTYPE HTML>
    <html>
        <head>
           <script src="simple.js"></script>
        </head>
        <body>
            <p>This is a test.</p>
            <a href="http://www.codefordream.com">Visit CodeForDream</a>
        </body>
    </html>
    
属性'src'的值是你要引入的外部脚本文件的路径.上面的例子,'simple.js'和html页面位于同一文件夹中.

开始标签和结束标签必须配合使用,即使标签的内容为空.如果你使用单标签引用外部脚本文件,浏览器就会忽略这个标签,并且不会加载你指定的文件.

###延迟加载
使用'async'和'defer'属性,可以控制脚本的执行时间.

'defer'属性浏览器在页面加载解析完成之后再执行相应的脚本.

为了理解'defer'的作用,我们来看看下面的例子:    
新建一个名为'simple2.js'的脚本文件,内容为:
  
    document.getElementById("myID").innerText = "myValue";
    
下面的html页面引入了上面的脚本文件:

    <!DOCTYPE HTML>
    <html>
        <head>
           <script src="simple2.js"></script>
        </head>
        <body>
           <p id='myID'>This is a test.</p>
        </body>
    </html>
    
浏览器加载html页面时会逐行解析执行.当解析到`<script>`标签加载执行脚本时,脚本程序会到页面上去寻找'id'为'myID'的元素,并修改元素的文本
为'myValue'.但是,此时页面并未加载完成,'id'为'myID'的元素并不存在.所以脚本程序就会报错,找不到指定的元素.解决这个问题有两种方式:  
1:将要执行的脚本放在需要获取的元素之后执行

    <!DOCTYPE HTML>
    <html>
        <head>
            <title>CodeForDream</title>
        </head>
        <body>
          <p id='myID'>This is a test.</p>
          <script src="simple2.js"></script>
        </body>
    </html>
    
2:使用'defer'属性,延迟加载执行

    <!DOCTYPE HTML>
    <html>
        <head>
           <script defer src="simple2.js"></script>
        </head>
        <body>
           <p id='myID'>This is a test.</p>
           <a href="http://www.codefordream.com">CodeForDream/a>
        </body>
    </html>
    
**注:'defer'属性只能用于引入外部脚本文件,不能用于内联脚本.即'defer'只能和'src'一起使用.**

###异步加载
浏览器的默认行为是,当遇到脚本标签`<script>`时,会停止解析页面,直到脚本执行完成后,再继续解析页面.(我们称为'同步加载')  
我们可以使用'async'属性实现异步加载,即当加载执行脚本文件的同时不会阻止页面的解析.例如:

    <!DOCTYPE HTML>
    <html>
        <head>
           <script async  src="simple2.js"></script>
        </head>
        <body>
            <p>This is a test.</p>
            <a href="http://java2s.com">java2s.com</a>
        </body>
    </html>
    
使用异步属性的脚本可能不会在它们定义的顺序被执行.这使得异步功能不适用于依赖于其它脚本定义的函数或值的脚本.
