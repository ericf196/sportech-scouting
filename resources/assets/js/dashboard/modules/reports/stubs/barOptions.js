export const barBaseOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Parry'
    },
    xAxis: {
        categories: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        title: {
            text: 'Body Zone'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Parrys',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Parry Numbers',
        data: [1, 0, 2, 2, 0, 3, 4, 0, 0, 1, 0, 0]
    }]
}