const fs = require('fs');




class Archivo{

    fileName: String;
    contador = 0;

    constructor(name: String){
        this.fileName = name;
        this.crearArchivo(this.fileName);
    }
    async crearArchivo(name: String){

        let data:[] =[]
        try{
            await fs.promises.writeFile(`./files/${this.fileName}.txt`, JSON.stringify(data) ,{flag: 'a'})

        } catch (err) {
            console.log(err);
        }
    }

    async leer() {
        try{
            let contenido = await fs.promises.readFile(`./files/${this.fileName}.txt`, 'utf-8');
            contenido = JSON.parse(contenido);
            console.log(contenido);
        } catch (err) {
            console.log(err);
        }
    }

    async guardar(newTitle: String, newPrice: Number, newUrl: String){
        let id:Number;
        let product = {title:  newTitle, 
                        price: newPrice,
                        thumbnail: newUrl
                    }

        try{
            await fs.promises.writeFile(`./files/${this.fileName}.txt`, JSON.stringify(product),{flag: 'a'})

        } catch (err) {
            console.log(err);
        }
    }

    async borrar(){


    }

    
}



let archivo = new Archivo('test');

archivo.guardar('sarasa', 155.56, 'https://sarasa.com.ar');
// archivo.leer();
