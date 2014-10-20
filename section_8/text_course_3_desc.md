ruby rt rp : ruby标签包含ruby注释。 rt 标记ruby标签里面内容的注释。rp 定义不支持ruby元素的浏览器所显示的内容。使用代码如下：

	<p>
    我喜欢
    <ruby>
        CSS
        <rp>(</rp>
        <rt>Cascading Style Sheets</rt>
        <rp>)</rp>
    </ruby>
	</p>
显示效果图如下：

<img src="http://html-basic-images.qiniudn.com/section_8_text_course_2.png" style="width:300px;">

s :使用s标签标记不再使用或者不再正确的内容。如：

	now<s>HTML4</s>HTML5
samp :定义样本文本，表示输出程序或计算机系统。如：

	<samp>sample</samp>
small :标记细则和经常用在免责声明和澄清等内容。如：

    <small>good</small>
span：本身没有意义，通常用它给一个区域的内容设置全局属性。如:

	<span class="myClass">CSS</span>

strong :标记重要的内容。如：

	<strong>重要的内容</strong>
sub sup : sub定义下标文本  sup定义上标文本。如：

	X<sub>10</sub>
    X<sup>10</sup>
显示网页如下：

<img src="http://html-basic-images.qiniudn.com/section_8_text_course_3.png" style="width:200px;">

time 定义时间 。使代码更合理，页面结构更清晰。如：

	<time datetime="16:00">4 o'clock</time>
u :给文本添加下划线。如：

	<u>CSS</u>

var :用来说明被包含的内容是一个变量 主要作用是来使代码的语义更加清晰，让代码更有可读性，没有具体作用。如：

	<var>text_variable</var>//表示一个变量
Wbr :在文本中的何处适合添加换行符，给一段长的文字添加合适的换行的位置。如：

	<wbr>HTML5<wbr>CSS
表示HTML5和CSS前面为合适的换行位置。
