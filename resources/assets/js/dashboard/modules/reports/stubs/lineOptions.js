export const lineBaseOptions = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Points vs Time'
    },
    xAxis: {
        title: {
            text: 'Time'
        },
        categories: [],
        labels: {
            formatter: function () {
                return this.value + 'min';
            }
        }
    },
    yAxis: {
        title: {
            text: 'Points'
        },
        labels: {
            formatter: function () {
                return this.value + 'pt';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        line: {
            marker: {
                radius: 8,
                lineWidth: 0
            },
            dataLabels: {
                enabled: true,
                color: 'white',
                verticalAlign: 'middle',
                crop: false,
                overflow: 'none',
                style: {
                    fontWeight: 'bold',
                    textOutline: 'none',
                    fontSize: '16px'
                }
            }
        }
    },
    series: [{
        name: 'Pedro Gorrin',
        color: '#ff6600',
        index: 2,
        marker: {
            symbol: 'circle',
            radius: 12

        },
        data: []

    }, {
        name: 'Javier Bastidas',
        color: '#64b5f6',
        index: 1,

        marker: {
            symbol: 'circle',
            radius: 12
        },
        data: []
    }]
}