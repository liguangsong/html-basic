`<section>` 标签定义了文档的某个区域.比如章节、头部、底部或者文档的其他区域.

`<section>` 标签节应该被用来包含将被列在文档的大纲或表格中的内容的内容.

`<section>` 元素通常包含一个或多个段落和标题,尽管标题是可选的.

例如:
    
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>demo of section</title>
        </head>
        <body>
          <section>
            <hgroup>
              <h1>H1</h1>
              <h2>H2</h2>
            </hgroup>
            This is a test.
            <section>
              <h1>H1</h1>
              This is a test.
              <section>
                <h1>More information</h1>
                This is a test.
              </section>
            </section>
          </section>
        </body>
    </html>