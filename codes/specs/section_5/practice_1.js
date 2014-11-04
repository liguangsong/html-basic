
describe('practice-7-1', function () {

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
    it("body标签的子标签有dl标签、ol标签、ul标签，dl标签的子标签有dt和两个dd标签，ol和ul标签里面分别有两个li标签", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        console.log(body_element_children);
        //dl标签
        var dl_element = body_element_children[1];
        expect(dl_element.raw).toBe("dl");
        var dt_dl_element = dl_element.children[1];
        expect(dt_dl_element.raw).toBe("dt");
        expect(dt_dl_element.children[0].data).toBe("秋天的水果（普通列表）");
        var dd_dl_element1 = dl_element.children[3];
        expect(dd_dl_element1.raw).toBe("dd");
        expect(dd_dl_element1.children[0].data).toBe("苹果");
        var dd_dl_element2 = dl_element.children[5];
        expect(dd_dl_element2.raw).toBe("dd");
        expect(dd_dl_element2.children[0].data).toBe("香蕉");


        var p_ol_explain_element = body_element_children[2];
        expect(p_ol_explain_element.raw).toBe("p");
        expect(p_ol_explain_element.children[0].data).toBe("秋天的水果（有序列表）");

        //ol标签
        var ol_element = body_element_children[3];
        expect(ol_element.raw).toBe("ol");
        var li_ol_element1 = ol_element.children[1];
        expect(li_ol_element1.raw).toBe("li");
        expect(li_ol_element1.children[0].data).toBe("苹果");
        var li_ol_element2 = ol_element.children[3];
        expect(li_ol_element2.raw).toBe("li");
        expect(li_ol_element2.children[0].data).toBe("香蕉");

        var p_ul_explain_element = body_element_children[4];
        expect(p_ul_explain_element.raw).toBe("p");
        expect(p_ul_explain_element.children[0].data).toBe("秋天的水果（无序列表）");

        //ol标签
        var ul_element = body_element_children[5];
        expect(ul_element.raw).toBe("ul");
        var li_ol_element1 = ul_element.children[1];
        expect(li_ol_element1.raw).toBe("li");
        expect(li_ol_element1.children[0].data).toBe("苹果");
        var li_ol_element2 = ul_element.children[3];
        expect(li_ol_element2.raw).toBe("li");
        expect(li_ol_element2.children[0].data).toBe("香蕉");
        done();
    });

});




