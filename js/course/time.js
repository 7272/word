/**
 * 课时信息模块
 */

define(['jquery', 'text!tpls/courseTime.html', 'template','course/addTime'], function ($, courseTime, template,addTime) {

    return function f(id) {

        $.ajax({
            url: '/api/course/lesson',
            type: 'get',
            data: {
                cs_id: id
            },
            success: function (res) {
              
                var courseTimeTpl = template.render(courseTime, res)
                var $courseTime = $(courseTimeTpl);
                $courseTime.on('click','.btn-add',function(){
                    var id =    $(this).parent().attr('cs_id')
                    console.log(id)
                    addTime(id,function(){
                        f(id)
                    });
                })
                $('.panel-content .panel-body').html($courseTime)
            }
        })

    }
})