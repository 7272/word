# 博学谷项目
## 目录结构
bxg9
    js/
        teacher
            add.js
            index.js
            edit.js
        course
            index.js-->课程列表
            add.js-->添加课程
        lib：存放第三方的纯js库
            jquery.js
            require.js
    assets/：存放第三方的项目(可能拥有js/css/fonts等资源文件)
        bootstrap
        ueditor
        uploadify
        datetimepicker
    css/
        index.less/
    tpls/   -->用于存放网站中的模板文件
        teacherAddTpl.html
        courseAddTpl.html
    login.html  -->登录页
        -->没有模块化开发
    index.html  -->主页
        -->用requireJS进行模块化开发
    main.js
        -->requireJS的入口文件
## jquery事件回调函数有一个参数：事件对象e
+ e.preventDefault();阻止事件的默认行为
+ e.stropPropagation();阻止事件冒泡

## 登录功能？
1. bootstrap进行页面布局
2. 要进行表单提交-->异步提交
    1. 阻止页面跳转-->通过给form标签绑定submit事件，并且return false阻止默认行为就可以实现阻止页面跳转
    2. 自己通过ajax的方式把数据提交到服务器中验证？
        + 要进行ajax，就必须要有接口地址、接口类型，接口请求参数这三个条件
            - 接口地址，接口类型通过接口文档：http://doc.botue.com得知
            - 请求参数（要提交的数据）：
                - 基本原理：$("form").serialize();获取表单的序列化数据
                    - 要获取的表单数据，该表单必须要有name属性，name属性应该通过接口文档查看参数说明，一一对应的编写