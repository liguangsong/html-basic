form表单：用来接收用户输入信息，表单中可以包含input标签（我们将会在后面详细讲解），下面学习一下form表单的属性。

action ：设置URL将表单数据发送到相应的服务器。

method：设置如何发送表单数据，分为两种方式"post"和"get",默认为"get"方法。

"get"方法 浏览器与action属性中的URL建立连接后，一次传输表单中所有的数据，并且会将数据直接附在URL之后。（不安全）

"post"方法 浏览器与action属性中的URL进行连接后，浏览器将表单数据分段发送给服务器；在服务器端，需要对接收到的数据进行解码处理（服务器端会表明如何让接受数据参数）。

下面是关于action和method属性使用的代码：

	<form method="post" action="http://codefordream.com/form">
    	name:<input name="name" />
    	<button>submit</button>
	</form>

accept-charset ：设置服务器用哪种字符集处理表单数据。一般常用的字符集为：(UTF-8:Unicode字符编码)、 (ISO-8859-1:拉丁字母表的字符编码)、（gb2312:简体中文字符集)。使用如下：

	<form action="http://codefordream.com/form"  accept-charset="gb2312">

autocomplete ：设置是否开启表单自动填写补全功能，默认为"on"。使用如下：

    <form action="index.html"  method="get" autocomplete="on">

enctype ：设置在发送到服务器之前对表单数据的编码。 默认为：application/x-www-form-urlencoded。
  application/x-www-form-urlencoded 表单发送前对所有字符进行编码。（这种编码会将空格转化为"+"加号，特殊符号转换为ASCII HEX值）

  multipart/form-data 不对字符编码，在使用包含文件上传的表单时，必须使用该值。

  text/plain 这种编码会将字符中的空格转换为"+"加号，但不对特殊字符编码。

name:表单的名字。使用如下：

    <form action="index.html"  method="get" name="myform">

novalidate ：设置提交表单时不对表单进行验证。

target ： 设置在何处打开action属性的URL。

   _blank 在新的窗口中打开

   _self 默认。在相同的框架中打开

   _parent 在父框架集中打开

   _top 在整个窗口中打开

   framename 在指定的框架中打开

下面简单学习一下Label。

label : 给表单或者其他元素添加文本属性。代码使用如下：

	<form method="post" action="http://codefordream.com/form">
    	<p>
        	<label>name: <input name="name" /></label>
    	</p>
    	<button>submit</button>
	</form>

展示效果图，如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_1.png" style="width:300px;">


