var valores = [true, 5, false, "hola", "adios", 2];

function largestText (arr) {
    var largestElement = "";
    arr.forEach(element => {
        if (typeof element === "string" && (element.length >= largestElement.length)){
            largestElement = element;        
        };
    });
    console.log(largestElement);
}

function findFalse (arr){
    var index = arr.indexOf(false);
    console.log(`False encontrado en la posicion `+index);
}

function sumElements (arr) {
    var sum = 0;
    arr.forEach(element => {
        if(typeof element === "number"){
            sum += element;
        }
    })
    console.log(sum);

}

var monthsList = {
    meses: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],

    mostrarMeses() {
        this.meses.forEach(element => {
            console.log(element);}
            )
    },
    getNumeroMes(name){
        if (typeof name === "string"){
            var indice = this.meses.indexOf(name);
            if (indice >= 0){
                console.log(indice+1);
            }else{
                console.log("El mes buscado no es valido");
            }

        } else{
            console.log("No ingreso una cadena de caracteres valida");
        }
    },

    getLetrasMes(){
        this.meses.forEach(e => {
            console.log(e.slice(0,3));
        })

    }
}




largestText(valores);
findFalse(valores);
sumElements(valores);

monthsList.mostrarMeses();
monthsList.getNumeroMes("enero");
monthsList.getNumeroMes(223);
monthsList.getNumeroMes("octubreasd");
monthsList.getNumeroMes("marzo");
monthsList.getNumeroMes("diciembre");
monthsList.getLetrasMes();