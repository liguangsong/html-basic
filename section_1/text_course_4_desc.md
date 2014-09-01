HTML标签是我们用以表达的页面内容及结构的。
势必有些标签我们需要对他进行更细致的设置。所以引入了属性。属性提供了有关 HTML 元素的更多的信息。

大概的规则有下面几条

- 属性总是以名称/值对（又叫键值对）的形式出现，比如：name="value"。属性的名称通常叫做“属性名”，值叫做“属性值”。等号两边可以有空格，但是一般不用
- 属性值可以不使用引号，当值里有空格等特殊符号的时候，需要双引号或单引号引起，但是不建议不是用引号。
- 属性总是在 HTML 元素的开始标签中规定。
- 属性名和属性值对大小写不敏感

举例来看下面的是一个页面上最常见的链接的HTML代码：

    <a href="http://www.codefordream.com">前往“为梦想编程”</a>

a是标签名，href是属性名，“http://www.codefordream.com”是属性值。如前所述，属性被写在开始标签里。

有一些属性是某些元素专有的,比如a的href属性.

有一些属性是global的,就是说每一个HTML元素都拥有这些属性.在HTML5里有下列元素:

- accesskey
- class 用来指定当前元素使用css里定义的哪个的class,又是也只是被用来标明语义
- contenteditable 元素里的文字是否可以被修改
- contextmenu
- dir
- draggable 标明元素是否可以被拖拽
- dropzone
- hidden
- id 元素的id,一个页面只能有一个
- lang
- spellcheck
- style 指定元素的样式,要用css语言
- tabindex
- title 标题
