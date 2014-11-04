这一节我们学习input标签的使用。

input ：单行文本输入框。下面学习一下input常用的属性：

size： 表示输入框可以展示字符的长度

maxlength： 表示输入框可以展示字符的长度。

	<input size="10" maxlength="10" id=”name”/>

placeholder： 文字占位符

value： 输入框中显示的文字

	<input placeholder="Your name" />
	<input value="my name" />

显示效果如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_4.png" style="width:400px;">

`<datalist>`：为文本框创建展示列表

    <form method="post" action="http://example.com/form">
    	names: <input list="list"  />
	</form>
	<datalist id="list">
    	<option value="A" label="1st" />
    	<option value="B">2nd</option>
    	<option value="C"/>
	</datalist>

效果显示如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_5.png" style="width:280px;">

disabled和readonly 两个属性表示不可编辑的文本输入框

	name: <input value="张三" readonly />
	name: <input value="张三" disabled/>

运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_6.png" style="width:250px;">

autofocus 自动将光标聚焦在已设置的输入框中

	name: <input id="name" autofocus />
运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_8.png" style="width:250px;">

tabIndex ：点击tab键，焦点集中的位置顺序
password类型： 密码输入框

	<input type="password" placeholder="password" id="password"/>
button 类型

	<input type="button" />

数字输入框

	<input type="number" step="1" min="0" max="100" value="1" id="age"/>

范围输入框：

	1<input type="range" step="1" min="0" max="100" value="1" id="age"/>100

展示效果图如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_7.png" style="width:250px;">

选项输入框

	<input type="checkbox" checked id="age"/>选项一
<img src="http://html-basic-images.qiniudn.com/section_10_text_course_9.png" style="width:250px;">

	<input type="radio" checked /> 选项一
<img src="http://html-basic-images.qiniudn.com/section_10_text_course_10.png" style="width:240px;">




