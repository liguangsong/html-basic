FieldSet :将表单中的相关内容分组。代码使用如下：

	<form method="post" action="http://codefordream.com/form">
    	<fieldset style="width: 300px;">
        	<p>
            	<label for="name">name: <input id="name" name="name" /></label>
        	</p>
        	<p>
           	 	<label for="age">age: <input id="age" name="name" /></label>
        	</p>
   	 	</fieldset>
    	<fieldset  style="width: 300px;">
        	<p>
            	<label for="grade">grade: <input id="grade" name="name" /></label>
        	</p>
    	</fieldset>
    	<button>submit</button>
	</form>

展示效果效果如下：

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_2.png" style="width:500px;">

下面给表单中的每个组添加描述信息：使用legend标签，给一个组添加描述信息的代码如下：

	<form method="post" action="http://codefordream.com/form">
    	<fieldset style="width: 300px;">
        	<legend>进入个人信息</legend>
        	<p>
            	<label for="name">name: <input id="name" name="name" /></label>
        	</p>
        	<p>
            	<label for="age">age: <input id="age" name="name" /></label>
        	</p>
    	</fieldset>
    	<button>submit</button>
	</form>

展示效果效果如下:

<img src="http://html-basic-images.qiniudn.com/section_10_text_course_3.png" style="width:500px;">

给fieldset标签添加disabled属性 设置禁用一组表单。被禁用的表单元素不可点击，使用如下：

	<fieldset disabled="disabled" >

接下来学习一下button的类型：
type="button" 按钮为普通的可点击按钮
type="submit" 按钮为提交按钮
type="reset" 按钮是重置按钮
