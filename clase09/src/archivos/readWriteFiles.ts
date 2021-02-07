import {Archivo} from './archivos';

const dataSource = new Archivo('productos');

async function readDataFile(){
    try {
      let data = await dataSource.read();
      return data;
      
    } catch(err){
      console.log(err);
    }
  }
  
async function writeDataFile(title: string, price: number, thumbnail: string){
    let data;
    try {
      data = await dataSource.save(title, price, thumbnail)
          
  
    } catch (error) {
      console.log(error);
    }
    return data;
}

async function updateDataFile(id: number, title: string, price: number, thumbnail: string){
  let data;
    try {
      data = await dataSource.update(id, title, price, thumbnail);
  
    } catch (error) {
      console.log(error);
    }
    return data;
}
async function deleteItem(id: number){
  let data;
    try {
      data = await dataSource.delete(id);
  
    } catch (error) {
      console.log(error);
    }
    return data;
}



export {readDataFile, writeDataFile, updateDataFile, deleteItem};