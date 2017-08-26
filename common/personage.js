/**
 * 个人中心模块
 */

define(['jquery', 'text!tpls/personage.html', 'template','ueAll'], function ($, personageTpl,template) {

    return function () {

        $.ajax({
            url: '/api/teacher/profile',
            type: 'get',
            success: function (res) {
                var personage = template.render(personageTpl, res.result)

                var $personageTpl = $(personage)
                $('#modalPersonalCenter').remove();
                $personageTpl.on('submit','form',function(){
                    var formDate = $(this).serialize();
                    $.ajax({
                        url:'/api/teacher/modify',
                        type:'post',
                        data:formDate,
                        success:function(){
                             $('#modalPersonalCenter').modal('hide')

                             //重新加载
                             location.reload();
                        }
                    })

                    return false;
                }) 
                $personageTpl.appendTo('body').modal();

                var ue = UE.getEditor('ueContainer');
                ue.ready(function(){
                    ue.setContent(res.result.tc_introduce)
                })
                console.log(res)
            }
        })

    }
})