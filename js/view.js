'use strict';

let view = {}

view.ctx = document.getElementById('grafica').getContext('2d');

view.createChartLine = function createChartLine(conf) {
    return new Chart(view.ctx, {
        type: 'line',
        data: conf.data,
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: conf.x_label
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: conf.y_label
                    }
                }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot'
                }

            }
        }
    });
}
