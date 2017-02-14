export const gaugeBaseOptions = {
    chart: {
        type: 'solidgauge',
        height: 150
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: null,
            y: -70

        },
        stops: [
            [0.1, '#55BF3B'] // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
            enabled: false
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: null,
        data: [80],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:13px;color:' +
            ('black') + '">{y}%</span><br/>',
            y: -25
        },
        tooltip: {
            valueSuffix: '%'
        }
    }],
    title: {
        text: 'Efectividad'
    },

    pane: {
        size: '150%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
}