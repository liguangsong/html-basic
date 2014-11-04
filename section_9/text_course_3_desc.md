`<embed>` 在html文档中嵌入内容。如嵌入视频、插件等。（HTML4不支持）

	<embed src="http://html-basic-images.qiniudn.com/Taylor.Swift%5BLove.Story%5D.mp4"/>

`<object>` 在html文档中嵌入内容。

	<object data="http://html-basic-images.qiniudn.com/Taylor.Swift%5BLove.Story%5D.mp4"/>

使用`<object>`标签加载图片：

	<object data="http://ts1.mm.bing.net/th?id=HN.607988484064152362&pid=1.7"/>

进度条展示：

	<progress id="myprogress" value="50" max="100"></progress>

`<meter>`标签 表示已知范围内的标准测量

	<meter id="mymeter" value="90" min="10" max="100" low="40" high="80"
       optimum="60"></meter>
关于`<meter>`标签的属性，如下：

value=”90” 表示当前的测量值为90

high=”80” 表示正常适合范围的最大值

low=”40” 表示正常适合范围的最小值

min=”10” 表示可以展示的最小测量值

max=”100” 表示可以展示最大测量值

optimum=”60” 表示最标准的值
