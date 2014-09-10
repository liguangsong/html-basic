正确的答案是:

    <base>定义了当前文档中所有链接的基本路径

`<base>`定义的路径只能被当前文档中的相对链接使用,如果链接的URL是完整的,则不会使用`<base>`定义的路径.    
例如: `<a href="http://www.codefordream.com">`CodeForDream`</a>`,这个链接就不会使用`<base>`定义的基本路径.
