require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.1.4',
        template: 'lib/template-web',
        text: 'lib/text',
        cookie: 'lib/jquery.cookie',
        bootstrap: '../assets/bootstrap/js/bootstrap',
        tpls: '../tpls',
        datetime: '../assets/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker',
        datetimelang: '../assets/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN',
        upload: '../assets/uploadify/jquery.uploadify',
        ueConf: "../assets/ueditor/ueditor.config",
        //ueditor主文件
        ueAll: "../assets/ueditor/ueditor.all",
        echarts:'lib/echarts.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        datetimelang: {
            deps: ['datetime']
        },
        upload: {
            deps: ['jquery']
        },
        ueAll: {
            deps: ["ueConf"]
        }
    }
})

require(['jquery', 'teacher/list', 'category/list', 'course/list', 'course/add', '../common/personage','chart/echarts', 'bootstrap', 'cookie', 'datetime'], function ($, teacherList, categoryList, courseList, courseadd, commonPersonage,echarts) {
    var str = sessionStorage.getItem('userinfo')
    // var str = $.cookie('userinfo');

    var obj = JSON.parse(str)

    if (!str) {
        location.href = 'login.html'
    }




    $('.left img').attr('src', obj.tc_avatar)
    $('.left h3').html(obj.tc_name)

    $('.left .list-group').on('click', '.list-group-item', function () {
        if ($(this).hasClass('one')) {
            teacherList();
        }
        if ($(this).hasClass('two')) {

            courseList();
        }
        if ($(this).hasClass('three')) {

            // $('.panel-content .panel-body').html('课程分类')
            categoryList()

        }
        if ($(this).hasClass('four')) {
            echarts();
            // $('.panel-content .panel-body').html('图表统计')
        }
        if ($(this).hasClass('five')) {

            courseadd();
        }


        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.left .list-group .one').trigger('click')

    $('.personage').on('click', function () {
        commonPersonage();
    })
})