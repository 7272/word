define(['jquery', 'text!tpls/teacherList.html', 'template', 'teacher/teacherShow', 'teacher/add', 'teacher/edit'], function ($, htmlList, template, teacherShow, teacheradd, teacheredit) {

    return function fn() {
        $.ajax({
            url: '/api/teacher',
            type: 'get',
            success: function (data) {

                var html = template.render(htmlList, data)

                var $html = $(html).on('click', '.btn-show', function () {
                    var tc_id = $(this).parent().attr("tc_id");

                    teacherShow(tc_id);
                }).on('click', '#btn-add', function () {
                    teacheradd();
                }).on('click', '.btn-edit', function () {
                    var tc_id = $(this).parent().attr('tc_id')
                    teacheredit(tc_id, function () {
                        fn()
                    })
                }).on('click', '.btn-status', function () {
                    var $btnStatus = $(this);

                    // 1、 修改该讲师服务器中
                    $.ajax({
                        url: "/api/teacher/handle",
                        type: "post",
                        data: {
                            tc_id: $(this).parent().attr("tc_id"), //讲师id
                            tc_status: $(this).parent().attr("tc_status") //讲师原来的状态
                        },
                        success: function (res) {
                            if (res.code != 200) throw new Error(res.msg);

                            // 2、 修改表格中显示的指定的列的文本，以及按钮的文本
                            var tc_status = res.result.tc_status;
                            //2.1、找到用户状态列
                            $btnStatus.parent().siblings(".td-status").text(tc_status == 0 ? "启用" : "注销");
                            //2.2、找到表示用户状态的按钮
                            $btnStatus.text(tc_status == 0 ? "注销" : "启用");

                            //2.3、千万、一定、必须修改父元素中的状态值
                            $btnStatus.parent().attr("tc_status", tc_status);

                        }
                    })
                })

                $('.panel-content .panel-body').html($html)
            }
        })
    }

});