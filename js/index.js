'use strict';

let ctx = document.getElementById('grafica').getContext('2d');

let colors = {};
colors.Burbuja = '#2C92FF';
colors.Seleccion = '#E82C0C';
colors.Insercion = '#C7FF50';

let builders = {};

builders.inverse = function inverse(n) {
    let array = [];
    for(let i=n-1; i>=0; i--)
        array.push(i);
    return array;
}

builders.randomi = function randomi(n) {
	let array = [];
	for (let i=0; i<n; i++){
		let rand = Math.round(Math.random()*100);
		array.push(rand);
	}
	return array;
}

function* listasGenerator (listasBuilder, incremento) {
	let n = 5;
	while(true) {
		yield listasBuilder(n)
		n += incremento;
	}
}

function crearListas(generador, size) {
	let listas = [];
	for(let i=0; i<size; i++) {
		listas.push(generador.next().value);
	}
	return listas;
}

let randomGeneratorList = listasGenerator(builders.randomi, 10);
let listas = crearListas(randomGeneratorList, 20);

// console.log(listas);

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

let myChart = new Chart(ctx, {
    type: 'line',
    data: buildData(listas, Burbuja, Seleccion, Insercion),
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Tamaño del array'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Número de operaciones'
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
