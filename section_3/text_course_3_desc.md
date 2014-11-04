`<div>`标签的嵌套

嵌套图层 代码形式如下:

	<div class="border" style="position: absolute;width: 320px;height:300px;left:20px;top: 30px;">
		<div id="left" class="border" style="position: relative;width:220px;height: 200px;left: 30px;top: 30px;">
         	<p>测试名为left的div模块在html页面的最上层展示</p>
     	</div>
	</div>

页运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_5_text_course_3.png" style="width:500px"/>

嵌套图层可以保证子层永远位于父层之上。而且，当我们修改div1时，不会影响到div2以及整体的布局，只会改变div1，所以，在网页设计中，我们提倡使用div布局页面。

    <div id="divall" style="position: absolute;width: 320px;height: 300px;left: 20px;top: 30px;">
        <div id="div1" class="border" style="position: absolute;width: 100px;height: 100px;left: 30px;top: 30px;">
            <p>div1在html页面上展示</p>
        </div>
        <div id="div2" class="border" style="position: absolute;width: 120px;height: 100px;left: 140px;top: 30px;">
            <p>div2在html页面上展示</p>
	    </div>
    </div>
