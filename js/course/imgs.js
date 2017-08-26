/**
 * 上传图片模块
 */

define(['jquery', 'text!tpls/courseimg.html', 'template', 'upload'], function ($, courseimg, template) {

    return function (id) {

        $.ajax({
            url: '/api/course/picture',
            type: 'get',
            data: {
                cs_id: id
            },
            success: function (res) {
                var courseimgTpl = template.render(courseimg, res.result)
                var $courseimgTpl = $(courseimgTpl);
                $('.panel-content .panel-body').html($courseimgTpl)

                $('#fileImage').uploadify({
                    auto: true,
                    fileObjName: 'cs_cover_original',
                    fileTypeExts: "*.jpg; *.png; *.gif",
                    formData: {
                        cs_id: id
                    },
                    itemTemplate: "<span></span>",
                    buttonText: "选择图片",
                    swf: '/assets/uploadify/uploadify.swf',
                    uploader: '/api/uploader/cover',


                    onUploadSuccess: function (file, data, response) {
                        console.log(file);
                        console.log(data);
                        console.log(response);

                        $(".left .list-group .two").trigger("click");
                    }
                })

            }
        })

    }
})