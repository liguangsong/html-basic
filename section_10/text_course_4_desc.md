这一节，我们接着学习input。

邮箱格式输入框

	<input type="email"  id="email" name="email" />
展示效果如下图：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_11.png" style="width:400px;">

电话输入框

	<input type="tel"  id="tel" name="tel" />

日期输入框

	<input type="date" id="date" name="date" />
展示效果如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_12.png" style="width:400px;">

时间输入框

	<input type="time" id="time" name="time" />
颜色输入框

	<input type="color" id="color" name="color" />
搜素输入框

	<input type="search" id="search" name="search" />
隐藏输入框：隐藏需要上传的数据

	<input type="hidden" name="recordID" value="1234" />
图像输入框

	<input type="image" src="123.png" name="submit" />
选择文件上传输入框

	<input type="file" name="filedata" />

选择输入框

	<select id="char"name="char">
        <option value="A" >A</option>
        <option value="B" >B</option>
        <option value="C" selected >C</option>
        <option value="D" >D</option>
	</select>
展示效果如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_13.png" style="width:100px;">

select 标签属性multiple 设置显示多行选项，

	<select id="char"name="char" multiple >
显示效果如图：
<img src="http://html-basic-images.qiniudn.com/section_10_text_course_14.png" style="width:100px;">

`<optgroup>`标签：把选项相关的组合在一起

	<select id="char"name="char" multiple>
        <optgroup label="选项">
            <option value="A">A</option>
        </optgroup>
        <optgroup label="学校">
            <option value="学校A">学校A</option>
            <option value="学校B">学校B</option>
        </optgroup>
	</select>

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_15.png" style="width:150px;">
