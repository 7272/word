define(['jquery', 'text!../tpls/teacheradd.html','datetime','datetimelang'], function ($, teacheradd) {

    return function () {
        $('#teacheradd').remove();
        var $teacheradd = $(teacheradd).on('submit', 'form', function () {

            var fromdata = $(this).serialize();
            $.ajax({
                url: '/api/teacher/add',
                type: 'post',
                data: fromdata,
                success: function (data) {

                    if(data.code!=200) return console.log(data.msg)

                    $teacheradd.modal('hide')
                    // console.log( $teacheradd)
                   $('.left .list-group .one').trigger('click')
                }
            })
            return false;
        }).appendTo('body').modal();

             //在模态框已经加载到页面中之后再去渲染日期控件
        $teacheradd.find(".date-join").datetimepicker({
            format: 'yyyy-mm-dd',
            language: "zh-CN",
            weekStart: "1",       //从周几开始
            autoclose: true,        //选定一个日期之后就自动隐藏日期控件
            minView: "month", //如果是月，最小能够精确到哪一天，如果是天，最小能够精确到哪一个小时
            todayBtn: true,
            todayHighlight: true
        });

    }

});