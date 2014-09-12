`<style>`允许你在html文档中定义css样式   

`<style>`有三个本地属性: type, media, scoped ('scoped'属性是在html5中定义的)     

下面是使用`<style>`的一个例子:

    <!DOCTYPE HTML>
    <html>
        <head>
            <style type="text/css">
                a  {  <!--有关css的内容,请参考我们的css课程-->
                    background-color: grey;
                    color: white;
                    padding:  0.5em;
                }
            </style>
        </head>
        <body>
            <p>This is a test.</p>
            <a href="http://www.codefordream.com">Visit  CodeForDream</a>
        </body>
    </html>
    
上面例子的`<style>`标签中,对`<a>`进行了css样式定义.使`<a>`的背景为灰色,文本为白色,并添加了0.5em的内边距.

###type
'type'属性用于告诉浏览器样式的类型.然而浏览器唯一支持的样式类型就是css,所以'type'的值总是"text/css".

###media
'media'属性用于为不同的媒介类型规定不同的样式。

例如:
    
    <!DOCTYPE HTML>
    <html>
        <head>
            <style  media="screen" type="text/css">
                a  {
                    background-color: grey;
                    color: white;
                    padding:  0.5em;
                }
            </style>
            <style  media="print">
                a{
                    color:Red;
                    font-weight:bold;
                    font-style:italic
                }
            </style>
        </head>
        <body>
            <p>This is a test.</p>
            <a href="http://www.codefordream.com">Visit CodeForDream</a>
        </body>
    </html>
    
上面代码中,样式在对`<a>`定义了两种样式,'media = screen"指定样式在浏览器屏幕中显示时执行.'media = print'指定样式在打印时执行.
即:在浏览器上'Visit CodeForDream'显示为白色,背景为灰色;通过打印机打印出来时,在纸张上'Visit CodeForDream'显示为红色,粗体.,背景为白色.

预定义的'media'属性值有:    
&nbsp;&nbsp;&nbsp; screen : 计算机屏幕(默认值)   
&nbsp;&nbsp;&nbsp; tty : 电传打字机以及使用等宽字符网格的类似媒介     
&nbsp;&nbsp;&nbsp; tv : 电视类设备    
&nbsp;&nbsp;&nbsp; projection : 放映机   
&nbsp;&nbsp;&nbsp; handheld : 手持设备   
&nbsp;&nbsp;&nbsp; print : 打印预览模式/打印页  
&nbsp;&nbsp;&nbsp; braille : 盲人用点字法反馈设备   
&nbsp;&nbsp;&nbsp; aural : 语音合成器   
&nbsp;&nbsp;&nbsp; all : 适合所有设备  