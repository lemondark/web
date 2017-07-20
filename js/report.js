$(function(){
    var hParam={
        id:'#report-chart1',
        title: '各版本意见反馈情况',
        chart: {
            backgroundColor:"#e8ebf2",
            type: 'line'
        },
        subtitle: "",
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        ytitle: '反馈量',
        Unit:'万',
        data: [{
            name: '1.20..25',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '1.35.28',
            data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '2.15.20',
            data: [0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '3.28.25',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    };
    publicFun.multiCurve(hParam);
    //各机型实销、活跃、流失用户累计详情表
    var tableTitle =" 异常版本累积量详情表";
    var dParam = {};
    dParam.title = [
        { "title": "异常版本" },
        { "title": "2016-10" },
        { "title": "2016-11" },
        { "title": "2016-12" },
        { "title": "2017-01" },
        { "title": "2017-02" }
    ];
    dParam.data = [
        ['异常版本一',2500,1000,900,100,200],
        ['异常版本二',1200,800,1000,700,100],
        ['异常版本三',38000,34000,14000,20000,800]
    ];
    dParam.id = "#ersionMonthAreaDetailTable";
    dParam.order = 2 ;
    $('#ersionMonthAreaTableTitle').text(tableTitle);
    publicFun.datatables(dParam,tableTitle);
    $(".tableButton").on('click',function() {
        $(this).siblings('.toggleTableBox').toggle();
        var flag = $(this).siblings('.toggleTableBox').css('display');
        if (flag == "block") {
            $(this).addClass("Down");
        } else {
            $(this).removeClass("Down");
        }
    })
    /*$("#ersionAccumulativeBox").css("display","block");*/
    /*$('#report-chart2').highcharts({
        title: {
            text: '意见反馈情况'
        },
        chart: {
            backgroundColor:"#e8ebf2",
            type: 'column'
        },
        subtitle: "",
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            title: {
                text: '反馈量 (万)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '万'
        },
        credits: {
            enabled:false
        },
        series: [{
            name: '1.20..25',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });*/

})