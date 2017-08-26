/**
 * 基本信息
 */

define(['jquery', 'text!tpls/coursebaseinfo.html', 'template'], function ($, courseinfoTpl, template) {

    return function (id) {

        $.ajax({
            url: '/api/course/basic',
            type: 'post',
            data: {
                cs_id: id
            },
            success: function (res) {
                var courseinfo = template.render(courseinfoTpl, res.result);
                var $courseinfoTpl = $(courseinfo)
                console.log($courseinfoTpl)
                //submit事件
                $courseinfoTpl.on('submit', 'form', function () {
                    var formDate = $(this).serialize();
                    $.ajax({
                        url: '/api/course/update/basic',
                        type: 'post',
                        data: formDate,
                        success: function () {
                            $('.left .list-group .two').trigger('click')
                        }
                    })
                    return false;
                }).on('change', '.category-top', function () {
                    var val = $(this).val();
                    console.log(val)
                    $.ajax({
                        url: '/api/category/child',
                        type: 'get',
                        data: {
                            cg_id: val
                        },
                        success: function (res) {
                            var str = "";

                            res.result.forEach(function (v, i) {

                                str += "<option value='" + v.cg_id + "'>" + v.cg_name + "</option>";
                            });

                            $courseinfoTpl.find(".category-child").html(str);
                        }
                    })
                })
                $('.panel-content .panel-body').html($courseinfoTpl)

            }
        })



    }
})