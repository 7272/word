/**
 * 讲师查看
 */


define(['jquery', 'text!../tpls/teacherShow.html','template'], function ($, teacherShow,template) {
    return function (id) {

        $.ajax({
            url: '/api/teacher/view',
            type: 'get',
            data: {tc_id:id},
         
            success: function (data) {
                console.log(data)

             var teachershowpl = template.render(teacherShow,data.result)
                var $teacher=$(teachershowpl)
                $('#teachershow').remove();
               $teacher.appendTo('body').modal()

            }
        })



    }

});