答案如下：

    <form>
        <fieldset style="width: 200px;">
            <legend>基本信息</legend>
            <p>姓名：<input id="name"/></p>
            <p>年龄：<input id="age" type="number" min="0" max="100"/></p>
            <p>邮箱：<input type="email" pattern="^.*@jimitec.com$"/></p>
        </fieldset>
        <fieldset style="width: 200px;">
            <legend>个人简介</legend>
            <textarea rows="10" cols="20" autofocus="autofocus"></textarea>
        </fieldset>
        <button type="submit">提交</button>
    </form>