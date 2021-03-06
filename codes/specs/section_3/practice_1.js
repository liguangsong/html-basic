describe('practice-3-1', function () {

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

    it("body标签的子标签有div，设置div的具体属性", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        var div_element = body_element_children[1];


        expect(div_element.children[1].name).toBe("p");

        var div_dom_element = $("<"+div_element.raw+">");

        var arr_correct_attr = ["position:absolute", "height:200px", "width:200px", "background-color:#00aaaa", "left:30px", "top:30px"]
        var flag = judge_attrrbute_is_correct(div_dom_element,arr_correct_attr);
        expect(div_dom_element.attr("id")).toBe("test");
        expect(flag).toBe(true);
        done();
    });

});

function judge_attrrbute_is_correct(div_dom_element,arr_correct_attr)
{
    var div_attr_string = div_dom_element.attr("style");
    var reg = /\s/g;
    div_attr_string = div_attr_string.replace(reg,"");
    var arr_attr_value = div_attr_string.split(";");
    console.log(arr_attr_value);
//    var arr_correct_attr = ["position:absolute", "height:200px", "width:200px", "background-color:#00aaaa", "left:30px", "top:30px"]
    var flag ;
    for(var i = 0; i < arr_correct_attr.length; i ++)
    {
        flag = false;
        for(var j = 0;j < arr_attr_value.length; j ++ )
        {
            if(arr_correct_attr[i] == arr_attr_value[j])
            {
                flag = true;
                break;
            }
        }
        if(flag == false)
        {
            expect(flag).toBe(true);
            break;
        }
    }
    return flag;
}