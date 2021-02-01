const fs = require('fs');



export class Archivo{

    fileName: string;
    contador = 0;

    constructor(name: string){
        this.fileName = name;
    }
  
    async leer() {
        try{
            let contenido = await fs.promises.readFile(`./src/archivos/${this.fileName}.txt`, 'utf-8');
            return contenido;
        } catch (err) {
            console.log(err);
        }
    }

    async guardar(newTitle: string, newPrice: number, newUrl: string){
        let info;
        try{
            let data = await fs.promises.readFile(`./src/archivos/${this.fileName}.txt`, 'utf-8');
            
            info = JSON.parse(data);
            let id:Number = info.length+1;
            
            let product = {'title':  newTitle,
                       'price': newPrice,
                       'thumbnail': newUrl,
                       'id': id,
            };
            info.push(product);
            
            await fs.promises.writeFile(`./src/archivos/${this.fileName}.txt`, JSON.stringify(info, null, 4));

            
            return product;
            

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

