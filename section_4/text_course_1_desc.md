###通过`<h1>,<h2>,<h3>,<h4>,<h5>,<h6>`来创建文章标题
html对文章标题进行了分级,从高到底依次为:`<h1>,<h2>,<h3>,<h4>,<h5>,<h6>` 
   
`<h1>`定义最大的标题,`<h6>`定义最小的标题  

浏览器会自动的在标题的前后添加空行

请确保将 HTML heading 标签只用于标题。不要仅仅是为了产生粗体或大号的文本而使用标题。

搜索引擎使用标题为您的网页的结构和内容编制索引。

因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。

应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

与`<title>`不同的是,`<hn>`用于文档中某一个段落或某一篇文章的标题,而`<title>`则是表示整个文档的标题

下面的例子演示了标题标签基本用法:

    <!DOCTYPE HTML>
    <html>
        <head>
            <title>Demo Article Title tags</title>
        </head>
        <body>
          <h1>This is h1.</h1>
          <p>I like XML.</p>
          <h2>Additional h2</h2>
          <p>I like XML.</p>
          <h3>More information</h3>
          <p>I like XML.</p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>  
            <h1>Basic Text Formatting</h1>
            <p>The purpose of a web browser is
            to read HTML documents and compose them into visible
            or audible web pages. The browser does not display
            the HTML tags, but uses the tags to interpret the
            content of the page. HTML describes the structure
            of a website semantically along with cues for
            presentation, making it a markup language rather
            than a programming language. </p>
            <!--  www.codefordream.com  -->
            <h2>White Space and Flow</h2>
            <p>HTML elements form the building blocks of all
            websites. HTML allows images and objects to be
            embedded and can be used to create interactive
            forms. It provides a means to create structured
            documents by denoting structural semantics for
            text such as headings, paragraphs, lists, links,
            quotes and other items. It can embed scripts
            written in languages such as JavaScript
            which affect the behavior of HTML web pages.</p>
            
            <h2>Creating Headings</h2>
            <p> Web browsers can also refer to Cascading Style
            Sheets (CSS) to define the look and layout of text
            and other material. The W3C, maintainer of both
            the HTML and the CSS standards, encourages the
            use of CSS over explicit presentational HTML.</p>    
        </body>
    </html>

###使用`<hgroup>`对标题进行分组
使用`<hgroup>`可以在不影响页面大纲的情况下对网页或区段的标题进行组合

例如: 
    
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>Demo Article Title tags</title>
        </head>
        <body>
          <hgroup>
            <h1>H1</h1>
            <h2>H2</h2>
          </hgroup>
          <p>The 'hgroup' element allows you to treat multiple header 
          elements as a single item without affecting the outline of 
          your HTML document.</p>
          <h2>Additional</h2>
          <h3>More information</h3>
            <h1>H1</h1>
            <p>This is a test.</p>
            <h2>H2</h2>
            This is a test.<!--  www.codefordream.com  -->
            <h3>H3</h3>
        </body>
    </html>
