下面讲一下`<div>`标签的使用：

    <div id="left" class = "left_css">
	    <p>左侧栏</p>
    </div>

id: 用于标识`<div>`块（即`<div>`标签的名字）

class: 修饰`<div>`块的css样式组（css在这里不是重点讲解，我们会有专门的课程讲解css）

`<div>` 图层定义常见的属性设置：

   position:绝对定位和相对定位 (abosolute,relative)

   height:`<div>`模块的高度

   width:`<div>`模块的宽度

   left:相对于窗口左边的位置

   top:相对于窗口上边的位置


    <div class="border" style="position: absolute;width: 320px;height: 300px;left:20px;top: 30px;">
        <p>测试名为left的div模块在html页面上展示</p>
    </div>

效果如下图：

<img src="http://html-basic-images.qiniudn.com/section_5_text_course_2.png" style="width:500px"/>


注：div1内容改变时，不会影响到整个的html，可以专注修改div1的内容。
