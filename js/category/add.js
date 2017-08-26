define(['jquery', 'text!tpls/categoryadd.html', 'template'], function ($, cateadd, template) {

    return function () {

        $.ajax({
            url: '/api/category/top',
            type: 'get',
            success: function (res) {
                //手动添加顶级分裂
                res.result.unshift({
                    cg_id: 0,
                    cg_name: '顶级分类'
                })
                //把获取的数据添加到模板中
                var cateaddPtl = template.render(cateadd, res)
                //转换成jquery元素
                var $cateaddPtl = $(cateaddPtl);

                //submit的同步事件
                $cateaddPtl.on('submit', 'form', function () {
                       var formData = $(this).serialize()
                            console.log(formData)
                    //获取添加分类数据
                    $.ajax({
                        url: '/api/category/add',
                        type: 'post',
                        data: formData,
                        success: function (res) {
                         
                            $('#categoryadd').modal('hide');
                            $('.list-group .three').trigger('click');
                        }
                    })
                    return false;
                })

                //追加到页面中
                $cateaddPtl.appendTo('body').modal();
            }
        })




    }

});