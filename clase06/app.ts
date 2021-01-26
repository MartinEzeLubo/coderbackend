const fs = require('fs');




class Archivo{

    fileName: string;
    contador = 0;

    constructor(name: string){
        this.fileName = name;
        this.crearArchivo(this.fileName);
    }
    async crearArchivo(name: string){
        
        try{
            await fs.promises.writeFile(`./files/${this.fileName}.txt`, '[\n]')

        } catch (err) {
            console.log(err);
        }
    }

    async leer() {
        try{
            let contenido = await fs.promises.readFile(`./files/${this.fileName}.txt`, 'utf-8');
            // contenido = JSON.parse(contenido);
        } catch (err) {
            console.log(err);
        }
    }

    async guardar(newTitle: string, newPrice: number, newUrl: string){
        let info;

        try{
            let data = await fs.promises.readFile(`./files/${this.fileName}.txt`, 'utf-8');
            
            info = JSON.parse(data);
            console.log('first try');                        
            let id:Number;
            let product = {'title':  newTitle,
                            'price': newPrice,
                            'thumbnail': newUrl,
            };
            console.log(info);
            info.push(product);
            console.log(info);
            
            await fs.promises.writeFile(`./files/${this.fileName}.txt`, JSON.stringify(info, null, 1));


        } catch (err) {
            console.log(err);
        }
    }

    async borrar(){


    }

    
}



let archivo = new Archivo('test');

async function ejecutar() {
    await archivo.guardar('sarasa', 155.56, 'https://sarasa.com.ar');
    await archivo.guardar('sarasa', 155.56, 'https://sarasa.com.ar');
    await archivo.guardar('sarasa', 155.56, 'https://sarasa.com.ar');
    await archivo.guardar('sarasa', 155.56, 'https://sarasa.com.ar');
    await archivo.guardar('sarasa', 155.56, 'https://sarasa.com.ar');

}

ejecutar();

// archivo.leer();
