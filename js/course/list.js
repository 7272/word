/**
 * 管理模块
 */
define(['jquery', 'text!tpls/courseLIst.html', 'template','course/time','course/baseinfo','course/imgs'], function ($, courseLIst, template,courseTime,courseinfo,courseImg) {

    return function () {

        $.ajax({
            url: '/api/course',
            type: 'get',
            success: function (res) {
                var courseLIstTpl = template.render(courseLIst, res);
                //把获取的字符串转换成jquery对象
                $courseLIstTpl = $(courseLIstTpl);
                //点击事件
                $courseLIstTpl.on('click','.btn-time',function(){
                  var cs_id = $(this).parent().attr('cs_id')
                    courseTime(cs_id)
                }).on('click','.btn-baseinfo',function(){
                    var id=$(this).parent().attr('cs_id')
                    courseinfo(id);
                }).on('click','a',function(){
                  var id = $(this).attr('cs_id')
                   courseImg(id);
                })

                $('.panel-content .panel-body').html($courseLIstTpl)
            }
        })

    }
})