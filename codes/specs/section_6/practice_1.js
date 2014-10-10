
describe('practice-6-1', function () {

//    it('test', function() {
//        expect($('#test').text()).toBe("HelloWorld!");
//    });

    var html_object;
    var html_tag = function (element) {
        return element.type !== "text";
    };

    beforeEach(function(done) {
        $.get("practice.html").then(function(data) {
            var builder =new Tautologistics.NodeHtmlParser.HtmlBuilder(function(){}, {});
            var parser = new Tautologistics.NodeHtmlParser.Parser(builder, {});
            parser.reset();
            parser.parseComplete(data);

            html_object = _(builder.dom).filter(html_tag);
            console.log(JSON.stringify(html_object));
            done();
        });
    });

    it("顶层元素要有DocType标签", function (done) {
        expect(html_object[0].type).toBe("doctype");
        expect($.trim(html_object[0].data)).toBe("html");
        done();
    });

    it("顶层元素要有html标签", function(done){
        expect(html_object[1].type).toBe("tag");
        expect(html_object[1].name).toBe("html");
        done();
    });

    it("html标签下要先有两个标签，head标签和body标签",function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var head_element = html_element_children[0];
        expect(head_element.type).toBe("tag");
        expect(head_element.name).toBe("head");

        var body_element = html_element_children[1];
        expect(body_element.type).toBe("tag");
        expect(body_element.name).toBe("body");

        done();
    });

    it("head标签的子标签有title和meta，meta用来设定字符集为utf8，title用来设置标题", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var head_element_children = _(html_element_children[0].children).filter(html_tag);
        var meta_element = head_element_children[0];

        var meta_dom_element = $("<"+meta_element.raw+">");
        expect(meta_dom_element.attr("http-equiv")).toBe("Content-Type");
        expect(meta_dom_element.attr("content")).toBe("text/html; charset=utf-8");


        var title_element = head_element_children[1];
        console.log(JSON.stringify(title_element));
        expect($.trim(title_element.children[0].data)).toBe("我是标题");
        done();
    });
    it("body标签的子标签有section，section标签的子标签有h2和两个article标签，article标签内容相符", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        //section标签
        var section_element = body_element_children[1];
        expect(section_element.raw).toBe("section");
        var h_section_element = section_element.children[1];
        expect(h_section_element.raw).toBe("h2");
        expect(h_section_element.children[0].data).toBe("新闻.国内专题");

        var article_section_element1 = section_element.children[3];
        expect(article_section_element1.raw).toBe("article");
        expect(article_section_element1.children[1].raw).toBe("h3");
        expect(article_section_element1.children[1].children[0].data).toBe("2014年南方暴雨");
        expect(article_section_element1.children[3].raw).toBe("p");
        expect(article_section_element1.children[3].children[0].data).toBe("2014年南方暴雨详情");

        var article_section_element2 = section_element.children[5];
        expect(article_section_element2.raw).toBe("article");
        expect(article_section_element2.children[1].raw).toBe("h3");
        expect(article_section_element2.children[1].children[0].data).toBe("山西官场地震");
        expect(article_section_element2.children[3].raw).toBe("p");
        expect(article_section_element2.children[3].children[0].data).toBe("山西官场地震详情介绍");

        //nav 标签
        var nav_element = body_element_children[2];
        console.log(body_element_children);
        expect(nav_element.raw).toBe("nav");
        expect(nav_element.children[1].raw).toBe("a href=\"http://www.codefordream.com/\"");
        expect(nav_element.children[1].children[0].data).toBe("Learn More About");
        done();
    });

});




