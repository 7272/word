/**
 * 课程分类,编辑模块
 */


define(['jquery', 'text!tpls/categoryEdit.html', 'template'], function ($, categoryEdit, template) {

    return function (id) {

        $.ajax({
            url: '/api/category/top',
            type: 'get',
            success: function (res) {
                $.ajax({
                    url: '/api/category/edit',
                    type: 'get',
                    data: {
                        cg_id: id
                    },
                    success: function (resedit) {
                        res.result.unshift({cg_id:0,cg_name:'顶级分类'})
                        res.obj = resedit.result;
                        var categoryEditTpl = template.render(categoryEdit, res);

                        $('#categoryedit').remove();
                        //模板接收的值是字符串,所以不能直接使用jquery
                        //需要转换成jquery对象
                        var $categoryEditTpl = $(categoryEditTpl)


                       
                        $categoryEditTpl.on('submit','form',function(){
                             var formDate = $(this).serialize();
                             console.log(formDate)
                             $.ajax({
                                 url:'/api/category/modify',
                                 type:'post',
                                 data:formDate,
                                 success:function(){
                                     $('#categoryedit').modal('hide');
                                     $('.left .list-group .three').trigger('click');
                                 }
                             })

                            return false;
                        })
                        .appendTo('body').modal()
                    }

                })
                console.log(res)

            }
        })

    }
})