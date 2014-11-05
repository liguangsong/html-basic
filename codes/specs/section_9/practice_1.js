
describe('practice-10-1', function () {

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
    it("创建embed嵌入视频和iframe嵌入框架以及进度条和测量尺度", function(done){
        var html_element_children = _(html_object[1].children).filter(html_tag);
        var body_element_children = _(html_element_children[1].children).filter(html_tag);
        console.log(body_element_children);
        //embed标签
        var embed_element = body_element_children[1];
        expect(embed_element.raw).toBe("embed src=\"http://html-basic-images.qiniudn.com/Taylor.Swift%5BLove.Story%5D.mp4\" height=\"200\" width=\"300\" /");
        var iframe_element = body_element_children[2];
        expect(iframe_element.name).toBe("iframe");
        expect(iframe_element.attributes.height).toBe("200");
        expect(iframe_element.attributes.sandbox).toBe("allow-same-origin allow-scripts");
        expect(iframe_element.attributes.width).toBe("300");
        expect(iframe_element.attributes.src).toBe("http://www.codefordream.com/");

        var meter_element = body_element_children[3];
        expect(meter_element.name).toBe("meter");
        expect(meter_element.attributes.id).toBe("mymeter");
        expect(meter_element.attributes.low).toBe("30");
        expect(meter_element.attributes.max).toBe("100");
        expect(meter_element.attributes.high).toBe("70");
        expect(meter_element.attributes.optimum).toBe("50");
        expect(meter_element.attributes.value).toBe("40");

        var progress_element = body_element_children[4];
        expect(progress_element.name).toBe("progress");
        expect(progress_element.attributes.id).toBe("myprogress");
        expect(progress_element.attributes.max).toBe("80");
        expect(progress_element.attributes.value).toBe("30");


        done();
    });

});




