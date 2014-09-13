`<article>` 标签定义独立的内容。

`<article>` 标签定义的内容本身必须是有意义的且必须是独立于文档的其余部分。

`<article>` 的潜在来源： 
  
- 论坛帖子  
- 博客文章   
- 新闻故事   
- 评论   

使用范例:
    
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>demo of article</title>
        </head>
        <body>
          <article>
            <header>
              <hgroup>
                <h1 id="fruitsilike">H1Like</h1>
                <h2>H2</h2>
              </hgroup>
            </header>
            This is a test.
            <section>
              <h1 id="morefruit">XML</h1>
              This is a test.
              <section>
                <h1>HTML</h1>
                This is a test.
              </section>
            </section>
            <footer>
              <nav>
                Nav
              </nav>
            </footer>
          </article>
        </body>
    </html>