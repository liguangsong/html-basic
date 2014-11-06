
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
    it("body标签的子标签为p标签", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        console.log(body_element_children);
        //p标签
        var p_element1 = body_element_children[1];
        expect(p_element1.raw).toBe("p");
        var mark_element = p_element1.children[1];
        expect(mark_element.raw).toBe("mark");
        expect(mark_element.children[0].data).toBe("HTML");

        var em_element = p_element1.children[3];
        expect(em_element.raw).toBe("em");
        expect(em_element.children[0].data).toBe("超级文本标记语言");

        var bdi_element = p_element1.children[5];
        expect(bdi_element.raw).toBe("bdi");
        expect(bdi_element.children[0].data).toBe("浏览器");

        var s_element = p_element1.children[7];
        expect(s_element.raw).toBe("s");
        expect(s_element.children[0].data).toBe("HTML4");

        var p_element2 = body_element_children[2];
        expect(p_element2.raw).toBe("p");

        var a_element = p_element2.children[1];
        expect(a_element.name).toBe("a");
        expect(a_element.attributes.href).toBe("http://cn.bing.com/");
        expect(a_element.attributes.hreflang).toBe("en");
        expect(a_element.attributes.target).toBe("_blank");
        expect(a_element.children[0].data).toBe("必应");

        done();
    });

});




