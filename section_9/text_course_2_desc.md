这一节，我们学习给table表格添加属性。

给`<thead>`标签内的表头`<th>`元素设置id属性；给`<tbody>`标签内的`<th>`或`<td>`标签添加header属性  使一个表头单元格的id属性与一个数据单元格的header属性关联起来。代码如下：

	<table border="1">
    	<thead>
        	<tr>
            	<th id="name">姓名</th>
           		<th id="age">年龄</th>
        	</tr>
    	</thead>
    	<tbody>
       	 	<tr>
            	<td headers="name one">张三</td>
            	<td headers="age one">25</td>
        	</tr>
        	<tr>
            	<td headers="name two">李四</td>
            	<td headers="age two">23</td>
        	</tr>
    	</tbody>
	</table>

`<colgroup>`标签可以对表格的列进行组合，从而进行整体格式化。使用代码如下：

	<head>
    <style>
        #colgroup1 {
        background-color: red
        }

        #colgroup2 {
            background-color: green;
        }
    </style>
	</head>
	<body>
		<table border="1">
    		<colgroup id="colgroup1" span="1">
    		<colgroup id="colgroup2" span="1">
    		<thead>
        		<tr>
            		<th id="name">姓名</th>
           			<th id="age">年龄</th>
        		</tr>
    		</thead>
    		<tbody>
        		<tr>
            		<td headers="name one">张三</td>
            		<td headers="age one">25</td>
        		</tr>
        		<tr>
            		<td headers="name two">李四</td>
            		<td headers="age two">23</td>
        		</tr>
    		</tbody>
    		<tfoot>
    		<tr>
        		<td>平均</td>
        		<td>24</td>
    		</tr>
    		</tfoot>
		</table>
	</body>

运行效果如下：

<img src="http://html-basic-images.qiniudn.com/section_9_text_course_3.png" style="width:220px;">
