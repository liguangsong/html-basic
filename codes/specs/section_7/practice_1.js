
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
    it("body标签的子标签为table标签，创建基本的表格", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        console.log(body_element_children);
        //p标签
        var table_element = body_element_children[1];
        expect(table_element.raw).toBe("table border=\"1\"");
//        var mark_element = p_element1.children[1];
//        expect(mark_element.raw).toBe("mark");
//        expect(mark_element.children[0].data).toBe("HTML");
//
        var tr_element1 = table_element.children[1];
        expect(tr_element1.raw).toBe("tr");
        var th_element1 = tr_element1.children[1];
        expect(th_element1.raw).toBe("th");
        expect(th_element1.children[0].data).toBe("姓名");
        var th_element2 = tr_element1.children[3];
        expect(th_element2.raw).toBe("th");
        expect(th_element2.children[0].data).toBe("年龄");
        var th_element3 = tr_element1.children[5];
        expect(th_element3.raw).toBe("th");
        expect(th_element3.children[0].data).toBe("单位");
        var th_element4 = tr_element1.children[7];
        expect(th_element4.raw).toBe("th");
        expect(th_element4.children[0].data).toBe("工龄");

        var tr_element2 = table_element.children[3];
        expect(tr_element2.raw).toBe("tr");
        var td1_element1 = tr_element2.children[1];
        expect(td1_element1.raw).toBe("td");
        expect(td1_element1.children[0].data).toBe("赵六");
        var td1_element2 = tr_element2.children[3];
        expect(td1_element2.raw).toBe("td");
        expect(td1_element2.children[0].data).toBe("36");
        var td1_element3 = tr_element2.children[5];
        expect(td1_element3.raw).toBe("td");
        expect(td1_element3.children[0].data).toBe("A公司");
        var td1_element4 = tr_element2.children[7];
        expect(td1_element4.raw).toBe("td");
        expect(td1_element4.children[0].data).toBe("13");

        var tr_element3 = table_element.children[5];
        expect(tr_element3.raw).toBe("tr");
        var td2_element1 = tr_element3.children[1];
        expect(td2_element1.raw).toBe("td");
        expect(td2_element1.children[0].data).toBe("王五");
        var td2_element2 = tr_element3.children[3];
        expect(td2_element2.raw).toBe("td");
        expect(td2_element2.children[0].data).toBe("30");
        var td2_element3 = tr_element3.children[5];
        expect(td2_element3.raw).toBe("td");
        expect(td2_element3.children[0].data).toBe("B公司");
        var td2_element4 = tr_element3.children[7];
        expect(td2_element4.raw).toBe("td");
        expect(td2_element4.children[0].data).toBe("7");

        done();
    });

});




