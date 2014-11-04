`<col>`给表格中一个或者多个列设置属性
设置样式代码如下：

	<style>
        #colgroup1 {
            background-color: red
        }

        #col2 {
            background-color: green;
        }
	</style>

使用`<col>`标签代码如下：

	<colgroup id="colgroup1" span="1">
        <col span="2">//没有特定设置样式，则继承colgroup1的样式，前两列为红色
        <col id="col2">//样式为col2的绿色，默认为一列
        <col id="col3" span="1">//没有特定设置样式，则继承colgroup1的样式，给第三列后的一列设为红色
    </colgroup>

展示效果如图：

<img src="http://html-basic-images.qiniudn.com/section_9_text_course_4.png" style="width:220px;">

colspan和rowspan分别设置表格的占用标准表格的几行和几列  使用如下：

<img src="http://html-basic-images.qiniudn.com/section_9_text_course_5.png" style="width:800px">

caption标签:给表格设置标题，在`<table>`标签内添加标题。如下：

    <table border="1">
    	<caption>学生成绩单</caption>
	 	……
	</table>

效果图展示如下：

<img src="http://html-basic-images.qiniudn.com/section_9_text_course_6.png" style="width:300px;">


