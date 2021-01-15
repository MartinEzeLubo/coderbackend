const operacion = (number1: number, number2: number, op: String) => {
    
    return new Promise( (res, err)=> {
        
        switch (op.toLowerCase()){
            case 'suma': 
                import('./operations/sum').then(e => {
                    let Suma = e.default;
                    let op = new Suma(number1,number2);
                    res(op.resultado())
                })
            break;
            
            case 'restar': 
            import('./operations/subtract').then(e => {
                let Subtract = e.default;
                let op = new Subtract(number1,number2);
                res(op.resultado())
            })
            break;
            case 'multiplicar': 
            import('./operations/multiply').then(e => {
                let Multiply = e.default;
                let op = new Multiply(number1,number2);
                res(op.resultado())
            })
            break;
            case 'dividir': 
            import('./operations/divide').then(e => {
                let Divide = e.default;
                let op = new Divide(number1,number2);
                let resultado = op.resultado();
                if (resultado.toString() === 'Infinity'){
                    let fallo = new Error('No es posible dividir los valores ingresados');
                    err(fallo);
                    
                } else {
                    res(resultado);
                }
            })
            break;
        
            default:
                let fallo = new Error('operacion invalida');
                err(fallo);
        }



        })
}

//* Estas pruebas capturan todos los errores individualmente - Mezcla rara entre async/await y promesas**/
async function operaciones(){
    await operacion(10, 5, 'suma').then(e =>{
        console.log(e)})
        .catch(err => {
            console.log(err)
    });
    
    await operacion(10, 5, 'restar').then(e =>{
        console.log(e)})
        .catch(err => {
            console.log(err)
    });
    await operacion(10, 5, 'multiplicar').then(e =>{
        console.log(e)})
        .catch(err => {
            console.log(err)
    });
    await operacion(10, 5, 'dividir').then(e =>{
        console.log(e)})
        .catch(err => {
            console.log(err)
    });
    
    await operacion(10, 0, 'dividir').then(e =>{
        console.log(e)})
        .catch(err => {
            console.log(err)
    });

    await operacion(10, 0, 'divasdasidir').then(e =>{
        console.log(e)})
        .catch(err => {
            console.log(err)
    });
}


operaciones();


//* Estas pruebas terminan ante el primer error**/
async function operacionesAsync(){
    try{
        console.log(await operacion(10, 5, 'suma'));
        console.log(await operacion(10, 5, 'restar'));
        console.log(await operacion(10, 0, 'divasdasidir'));
        console.log(await operacion(10, 5, 'multiplicar'));
        console.log(await operacion(10, 5, 'dividir'));
        console.log(await operacion(10, 0, 'dividir'));
    } catch(err){
        console.log(err);
    }
}    
    

operacionesAsync();