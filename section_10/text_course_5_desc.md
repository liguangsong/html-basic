`<textarea>`标签：创建可以输入多行文本的文本框

有以下属性设置:

autofocus 文本框自动获得焦点

cols="20" 文本框的可以展示字符的宽度

disabled 该文本框中的内容不可编辑

form="form_id" 该文本框属于哪个表单

maxlength 文本框中可以输入的字符的最大长度

name 文本框的名字

placeholder 文本框的文字占位符

readonly 文本框为只读，内容不可编辑

required 文本框为必填的

rows 文本框的可见行数

wrap="hard"/"soft" 在提交表单时，文本内容换行的换行方式

<output>标签 ：修饰不同类型的输出。如：输出物品"重量"与"单价"的乘积

	<form oninput="result.value = weight.value *  price.value">
    	<input type="number"  id="weight" />
    	x <input type="number"  id="price" />
    	=
    	<output for="weight price" name="result" />
	</form>
output标签中的for属性 ：表示与输出结果相关的一个或多个元素，元素间用空格隔开。

限制验证文本框

require 表示所修饰的文本框是必须填写的。

给文本框内容设置边界值 min max

	<input type="number" min="0" max="100"/>

pattern 给文本框输入的内容设定格式（一般使用正则表达式）如：

	<input type="text" id="name" name="name" pattern="^.* .*$" />
上面的代码表示输入内容为 ：空格前后可以填写任意字符。


