
describe('practice-8-1', function () {

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
    it("body标签的子标签为form标签，创建表单展示个人信息", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        console.log(body_element_children);
        //form标签
        var form_element = body_element_children[1];
        expect(form_element.raw).toBe("form");
        var fieldset_form_element1 = form_element.children[1];
        expect(fieldset_form_element1.raw).toBe("fieldset style=\"width: 200px;\"");
        var legend_fieldset_element1 = fieldset_form_element1.children[1];
        expect(legend_fieldset_element1.raw).toBe("legend");
        expect(legend_fieldset_element1.children[0].data).toBe("基本信息");

        var p_fieldset_element1 = fieldset_form_element1.children[3];
        expect(p_fieldset_element1.raw).toBe("p");

        expect(p_fieldset_element1.children[0].data).toBe("姓名：");
        expect(p_fieldset_element1.children[1].name).toBe("input");
        expect(p_fieldset_element1.attributes.id).toBe("name");

        var p_fieldset_element2 = fieldset_form_element1.children[5];
        expect(p_fieldset_element2.raw).toBe("p");
        expect(p_fieldset_element2.children[0].data).toBe("年龄：");

        expect(p_fieldset_element2.children[1].name).toBe("input");
        expect(p_fieldset_element2.attributes.id).toBe("age");
        expect(p_fieldset_element2.attributes.max).toBe("100");
        expect(p_fieldset_element2.attributes.min).toBe("0");
        expect(p_fieldset_element2.attributes.type).toBe("number");


        var p_fieldset_element3 = fieldset_form_element1.children[7];
        expect(p_fieldset_element3.raw).toBe("p");
        expect(p_fieldset_element3.children[0].data).toBe("邮箱：");
        expect(p_fieldset_element3.children[1].name).toBe("input");
        expect(p_fieldset_element3.attributes.type).toBe("email");
        expect(p_fieldset_element3.attributes.pattern).toBe("^.*@jimitec.com$");

        var fieldset_form_element2 = form_element.children[3];
        expect(fieldset_form_element2.raw).toBe("fieldset style=\"width: 200px;\"");
        var legend_fieldset_element2 = fieldset_form_element2.children[1];
        expect(legend_fieldset_element2.raw).toBe("legend");
        expect(legend_fieldset_element2.children[0].data).toBe("个人简介");

        var textarea_fieldset_element = fieldset_form_element2.children[3];
        expect(textarea_fieldset_element.name).toBe("textarea");
        expect(textarea_fieldset_element.attributes.autofocus).toBe("autofocus");
        expect(textarea_fieldset_element.attributes.cols).toBe("20");
        expect(textarea_fieldset_element.attributes.rows).toBe("10");

        var button_form = form_element.children[5];
        expect(button_form.name).toBe("button");
        expect(button_form.children[0].data).toBe("提交");
        expect(button_form.attributes.type).toBe("submit");

        done();
    });

});




