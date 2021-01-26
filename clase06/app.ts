const fs = require('fs');



class Archivo{

    fileName: string;
    contador = 0;

    constructor(name: string){
        this.fileName = name;
        this.crearArchivo(this.fileName);
    }
    private async crearArchivo(name: string){
        
        try{
            await fs.promises.writeFile(`./${this.fileName}.txt`, '[\n]')

        } catch (err) {
            console.log(err);
        }
    }

    async leer() {
        try{
            let contenido = await fs.promises.readFile(`./${this.fileName}.txt`, 'utf-8');
            console.log(contenido);
        } catch (err) {
            console.log(err);
        }
    }

    async guardar(newTitle: string, newPrice: number, newUrl: string){
        let info;
        try{
            let data = await fs.promises.readFile(`./${this.fileName}.txt`, 'utf-8');
            
            info = JSON.parse(data);
            let id:Number = info.length+1;
            
            let product = {'title':  newTitle,
                            'price': newPrice,
                            'thumbnail': newUrl,
                            'id': id,
            };
            info.push(product);
            
            await fs.promises.writeFile(`./${this.fileName}.txt`, JSON.stringify(info, null, 4));


        } catch (err) {
            console.log(err);
        }
    }

    async borrar(){
        fs.unlink(`./${this.fileName}.txt`, (error: Error)=> {
            if (error) throw error;
        })
    }

}



let archivo = new Archivo('productos');

async function ejecutar() {
    await archivo.guardar('Forerunner 35', 23999.00, 'https://garmin.com.ar/Image/0/700_700-010-01689-03_1.jpg');
    await archivo.guardar('Forerunner 45', 29999.00, 'https://garmin.com.ar/Image/0/700_700-010-02156-01_1.jpg');
    await archivo.guardar('Forerunner 235', 34999.00, 'https://garmin.com.ar/Image/0/700_700-010-03717-54_1.jpg');
    await archivo.guardar('Forerunner 745', 67999.00, 'https://garmin.com.ar/Image/0/700_700-010-02445-13_1.jpg');
    
    await archivo.leer();

    console.log('El archivo estara disponible durante 30 segundos');
    setTimeout( ()=> {archivo.borrar(); console.log('Archivo Eliminado');}, 30000);
    
}

ejecutar();

