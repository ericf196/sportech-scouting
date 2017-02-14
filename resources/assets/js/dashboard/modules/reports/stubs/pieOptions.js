export const pieBaseOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Combat Status'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Percent',
        colorByPoint: true,
        data: [{
            name: 'EQUAL',
            y: 20
        }, {
            name: 'UP',
            y: 60,
        }, {
            name: 'DOWN',
            y: 20
        }]
    }]
}