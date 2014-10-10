`<div>`和`<section>`两者都有对网页进行布局的作用。`<div>`本身没有任何语义，仅用于页面布局或者给模块添加样式。

`<section>`顾名思义就是一个章节，它适用于对文档进行分块，将文档划分为章节（常用语修饰文档大纲），或者对一篇文章进行分块，将整篇文章分成不同的内容块。`<section>`一般包含h1~h6中的标题元素，一般不用包含header和footer标签（对于header和footer标签，我们在下一节会讲到），使用代码如下：

    <section>
    	<h1>这是一个子标题</h1>
  		<p>第一个子标题描述的内容</p>
	</section>
	<section>
    	<h1>这是另一个子标题</h1>
        <p>这是另一个子标题描述的内容</p>
	</section>


下面说一下与section相近的标签article:

`<article>`标签是特殊的`<section>`标签，与section不同，`<article>`标签是将文档或文章中的内容划分为相对独立的模块（如，将整本书的内容划分成多篇文章，或者将一篇文章划分成相对独立的不同的小结等），当然，我们所说的独立是指同一级别的article标签中的内容是相互独立的，所以一般在article标签内一般包含header和footer标签。`<article>`标签修饰的内容一般为论坛帖子、杂志或新闻文章、博客、用户提交的评论等。使用代码如下：

	<article>
    	<header>
         	<h2>撰稿人：小明</h2>
             <p><time pubdate="2014-10-9T:21-23:00">2小时前</time></p>
    	</header>
             <p>小明写的文章真的很好~~~~</p>
  	</article>
	<article>
     	<header>
         	<h2>撰稿人：小张</h2>
             <p><time pubdate="2014-10-9T:21-23:00">2小时前</time></p>
      	</header>
             <p>小张写的文章真的很好~~~~</p>
 	</article>

由上面关于section和article的举例，我们可以通过下面的方式区分两者的使用：假设我们修饰的内容为A，如果A脱离了整体依旧能成为独立的整体（独立的整体即本身内容不缺少必要的修饰元素，譬如：标题，它可以单独存在，不与其他内容关联），那么我们选择article修饰；如果A脱离了整体只能作为独立的部分（独立的部分即虽然内容独立，但不能作为完整的内容存在，可能没有标题、或者撰稿人等内容），我们选择section修饰。

以下是同时使用article和section的代码：

	<article>
    	<header>
        	<h1>大家好，我是美食爱好者小丽</h1>
    	</header>
    	<p>本文介绍一下美食爱好者小丽喜欢的水果。。。</p>
    	<section>
        	<h2>小丽喜欢的第一种水果是石榴</h2>
        	<p>美味的石榴营养丰富，富含维C。。。</p>
    	</section>
    	<section>
        	<h2>小丽喜欢的第二种水果是葡萄</h2>
        	<p>葡萄可以美容养颜。。。</p>
    	</section>
    	<footer>
        	<p>版权出自小丽</p>
    	</footer>
	</article>

关于两者做一下总结：一般来说,互为兄弟关系的两个相邻的`<section>`标签里面的内容一般是相关联的，而对于两个相邻的`<article>`标签而言，它们里面的内容是没有关联的，是独立的。
由上面的例子可以更加深刻地理解section和article,从语义上讲，article主要强调独立完整性，而section之间可能会有关联，每个section内容也不是完整， 正如上面的代码看到的，article是独立完整的一篇文章或者文档，而section可能有所关联且不完整。从理论上讲，article适用的内容，都可以使用section，但如果符合使用article的要求就不要使用section。


注意：一个`<section>`元素不能是`<address>`元素的子节点。

`<address>`元素是标记文档或文章中的联系信息，如：

	<address>
    	Questions and  comments? <a href="mailto:info@example.com">Email me</a>
	</address>



