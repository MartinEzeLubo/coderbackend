const operacion = (number1: number, number2: number, op: String) => {
    
    switch (op.toLowerCase()){
        case 'suma': return number1+number2;
        break;
        case 'resta': return number1-number2;
        break;
        default:
            return 'La operacion solicitada no esta disponible o es incorrecta.';
    }
}


operacion(10, 5, 'resta');

