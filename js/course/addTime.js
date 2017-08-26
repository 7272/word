/**
 * 添加课时模块
 */
define(['jquery', 'text!tpls/courseaddtime.html', 'template'], function ($, courseaddtimeTpl, template) {

    return function (id,callback) {
        //字符串转换成jquery对象
        var $courseaddtime = $(courseaddtimeTpl);
        //阻止submit同步跳转事件
        $courseaddtime.on('submit', 'form', function () {
            var formDate = $(this).serialize();
                formDate+='&ct_cs_id='+id;
            $.ajax({
                url: '/api/course/chapter/add',
                type: 'post',
                data:formDate,
                success:function(res){
                    console.log(res)
                 $courseaddtime.modal('hide');
                 callback();
                }

            })
            return false;
        }).appendTo('body').modal()

    }
})