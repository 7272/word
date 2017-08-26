define(['jquery', 'text!tpls/chart.html','echarts'], function ($, chartTlpl,echarts) {
    return function () {
        var count = [{
                name: '男',
                value: 0
            },
            {
                name: 'nv',
                value: 0
            }
        ]

        $.ajax({
            url: '/api/teacher',
            type: 'get',
            success: function (res) {
                res.result.forEach(function (v) {
                    if (v.tc_gender == 0) {
                        count[0].value++;
                    } else {
                        count[1].value++;
                    }
                })

                var $chart = $(chartTlpl);
                $('.panel-content .panel-body').html($chart)
                //页面渲染完成之后加载echarts
                var domMain = $chart.find(".main")[0];

                var myChart = echarts.init(domMain);

                // 指定图表的配置项和数据
                var option = {
                    //标题
                    title: {
                        text: '网站中男女比例',
                        subtext: '仅供参考\n上面是假的',
                        x: 'center' //水平居中
                    },

                    //提示框
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    //图例
                    legend: {
                        top: 10,
                        right: 10,
                        orient: 'horizontal', //图例的对齐方式  并排/一排一个
                        data: count.map(function (v) {
                            //v:{name:"",value:""}

                            return v.name;

                        })
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: count,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })





    }
})