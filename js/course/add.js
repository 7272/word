define(['jquery', 'text!tpls/courseadd.html'], function ($, courseadd) {

    return function () {

        var $courseadd = $(courseadd);

        $('#modalAddCourse').remove();
        $courseadd.on('submit', 'form', function () {
            var formDate = $(this).serialize();
                 
            $.ajax({
                url: '/api/course/create',
                type: 'post',
                data:  formDate,
          
                success: function () {

                    $courseadd.modal('hide')

                    $('.left .list-group .two').trigger('click')

                }
                
            })
            return false;
        }).appendTo('body').modal();
    }


})