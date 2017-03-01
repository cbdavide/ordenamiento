'use strict';

let colors = {};
colors.Burbuja = '#2C92FF';
colors.Seleccion = '#E82C0C';
colors.Insercion = '#C7FF50';
colors.QuickSort = '#9c27b0';

let builder = util.list.build.randomList;
let generator = util.list.generator;

function crearListas(generador, size) {
	let listas = [];
	for(let i=0; i<size; i++) {
		listas.push(generador.next().value);
	}
	return listas;
}

let randomGeneratorList = generator(builder, 10);
let listas = crearListas(randomGeneratorList, 20);

function buildData(listas, ...algorithms) {
    return {
        labels: listas.map(lista => lista.length),
        datasets: algorithms.map(sort => {
            return {
                label: sort.name,
                borderWidth: 2,
                backgroundColor: colors[sort.name],
                borderColor: colors[sort.name],
                data: listas.map(lista => {
                    return sort(lista.slice(0));
                }),
                fill: false,
                pointRadius: 8,
                pointHoverRadius: 12,
            }
        })
    }
}

let chart = view.createChartLine({
    data: buildData(listas, Burbuja, Seleccion, Insercion, QuickSort),
    x_label: 'Tamaño del array',
    y_label: 'Número de operaciones'
})
