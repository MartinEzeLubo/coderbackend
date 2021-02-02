import {Archivo} from './archivos';

const dataSource = new Archivo('productos');

async function readDataFile(){
    try {
      let data = await dataSource.leer();
      return data;
      
    } catch(err){
      console.log(err);
    }
  }
  
async function writeDataFile(title: string, price: number, thumbnail: string){
    let data;
    try {
      data = await dataSource.guardar(title, price, thumbnail)
          
  
    } catch (error) {
      console.log(error);
    }
    return data;
}

export {readDataFile, writeDataFile};