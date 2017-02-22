function Burbuja(a) {
    let n = a.length, c = 1;

    for(let i=0; i<n-1; i++) {
        c += 6;

        for(let j=i+1; j<n; j++) {
            c += 5;

            if(a[i] > a[j]) {
                c += 7;

                let t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    c += 2;
    return c;
}

function Insercion(array) {
    let i = 1, c = 2;
    while(i < array.length) {
        c += 7;
        let j = i - 1;
        t = array[i];

        while(t < array[j]) {
            c += 4;
            array[j + 1] = array[j];
            j--;
        }

        c += 3;

        array[j + 1] = t;
        i++;
    }

    return c;
}

function Seleccion(array) {
    let temp, c = 2;

    for(let i=0; i<array.length; i++){
        c += 13;
        let mi = i;

        for(let j = i + 1; j<array.length; j++) {
            c += 5;

            if(array[j] < array[mi]){
                c += 1;
                mi = j;
            }
        }

        temp = array[i];
        array[i] = array[mi];
        array[mi] = temp;
    }

    return c;
}

function QuickSort(array) {
	return quick_sort(array, 0, array.length - 1, 0);
}

function quick_sort(A, p, r, cont) {
	cont += 1;
	if(p < r) {
		let {q, c} = partition(A, p, r);
		cont += c;
		cont += quick_sort(A, p, q - 1, 0);
		cont += quick_sort(A, q + 1, r, 0);
	}

	return cont;
}

function partition(arr, p, r) {
	let cont = 6, x, i;
	x = arr[r];
	i = p - 1;
	for(let j = p; j <= r-1; j++) {
		cont += 3;
		if(arr[j] <= x) {
			cont += 8;
			i++;
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	cont += 8;

	let temp = arr[i + 1];
	arr[i + 1] = arr[r];
	arr[r] = temp;

	return {q: i+1, c: cont};
}

