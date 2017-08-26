define(['jquery', 'text!tpls/categoryList.html', 'template', '../../common/api','category/add','category/edit'], function ($, categoryList, template, api,categoryAdd,categoryEdit) {

    return function () {

        api.get('category',{}, function (res) {
            var categoryLis = template.render(categoryList, res);
                
               var $categoryList = $(categoryLis)
               $categoryList.on('click','.btn-add',function(){
                  categoryAdd();
               })
               .on('click','.btn-edit',function(){
                   var id=$(this).parent().attr('cg_id')
                  categoryEdit(id);
               })
            $('.panel-content .panel-body').html($categoryList);


        })


     

      



    }

});