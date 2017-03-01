'use strict';

let builder = util.list.build.randomList;
let list = builder(32);

let engine = new BinarySearch(list);
QuickSort(list);

function buildData(lista) {
    return {
        labels: lista,
        datasets: [{
            label: 'BinarySearch',
            borderWidth: 2,
            backgroundColor: '#3f51b5',
            borderColor: '#3f51b5',
            data: lista.map(item => {
                return engine.search(item);
            }),
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 12,
        }]
    }
}

let chart = view.createChartLine({
    data: buildData(list),
    x_label: 'Elementos del array',
    y_label: 'Número de operaciones'
})
