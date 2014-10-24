`<table>`:定义HTML文档中的表格。如果需要给表格设置边框，则`<table border=”1”>`
`<tr>`定义表格中的一行
`<th>`定义表格中的表头
`<td>`定义表格中的一列
使用代码如下：

	<table border="1">
    <tr>
        <th>姓名</th>
        <th>出生年月</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>1991年7月</td>
    </tr>
</table>
效果图展示如下：

<img src="http://html-basic-images.qiniudn.com/section_9_text_course_1.png" style="width:300px;">

`<thead>`标签定义表格的页头

`<tbody>`标签定义表格的主体

`<tfoot>`标签定义表格的页脚

使用三种标签划分table表格，使代码结构更加清晰。

使用代码如下：

	<table border="1">
    	<thead>
        	<tr>
            	<th>姓名</th>
           		<th>年龄</th>
       	 	</tr>
   		</thead>
    	<tbody>
        	<tr>
            	<td>张三</td>
            	<td>25</td>
        	</tr>
        	<tr>
            	<td>李四</td>
            	<td>23</td>
        	</tr>
    	</tbody>
    	<tfoot>
        	<tr>
            	<td>平均</td>
            	<td>24</td>
        	</tr>
    	</tfoot>
	</table>

运行效果图如下：

<img src="http://html-basic-images.qiniudn.com/section_9_text_course_2.png" style="width:230px;">
