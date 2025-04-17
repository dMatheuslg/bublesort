function bubbleSortCustom(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - i - 2; j++) {
    if (arr[j] > arr[j + 1]) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    }
    }
    }
    
    return arr;
    }
    
    let entrada = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
    
    let ultimo = entrada[0];
    entrada = entrada.slice(1);

    let ordenado = bubbleSortCustom(entrada);
    
    ordenado.push(ultimo);
    
    console.log("Resultado:", ordenado);