var operacion = function (number1, number2, op) {
    switch (op.toLowerCase()) {
        case 'suma':
            console.log(number1 + number2);
            break;
        case 'resta':
            console.log(number1 - number2);
            break;
        default:
            console.log('La operacion solicitada no esta disponible o es incorrecta.');
    }
};
operacion(10, 5, 'resta');
