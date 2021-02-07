import { errorMonitor } from 'events';
import express from 'express';
import {readDataFile, writeDataFile, updateDataFile, deleteItem} from './archivos/readWriteFiles';

const port = 8080;
const app = express();
const router = express.Router();

app.use(express.json());

app.use(express.static(__dirname + '/public'));


router.get('/', (req, res) => {
  res.send('API Clase 09');
});



router.get('/productos', async (req, res) => {
  
  let products = await readDataFile();
  res.json(products);

});


router.get('/productos/:id', async (req, res) => {
  
  try {
    let products = await readDataFile();
    let product = products.find(element => element.id === parseInt(req.params.id));
    if (!product){
      res.status(404).json({error: 'Producto no encontrado'})
    }
    res.json({'item': product});
  } catch (error) {
    res.status(500).send('Error de la aplicacion' + error);
  }
});

router.post('/productos/', async (req, res) => {
  if(!req.body.title || !req.body.price || !req.body.thumbnail){
    res.status(400).send('Los parametros enviados son incorrectos');
  }
  try {
    let data = await writeDataFile(req.body.title, parseInt(req.body.price), req.body.thumbnail);
    res.json(data)
    
  } catch (error) { 
    res.status(500).send('Error de la aplicacion' + error);
  }
});

router.put('/productos/', async (req, res) => {
  if(!req.body.id || !req.body.title || !req.body.price || !req.body.thumbnail){
    res.status(400).send('Los parametros enviados son incorrectos');
  }
  try {
    let data = await updateDataFile(parseInt(req.body.id), req.body.title, parseInt(req.body.price), req.body.thumbnail);
    res.json(data)
    
  } catch (error) { 
    res.status(500).send('Error de la aplicacion' + error);
  }
});


router.delete('/productos/:id', async (req, res) => {
  
  try {
    let products = await readDataFile();
    let product = products.find(element => element.id === parseInt(req.params.id));
    if (!product){
      res.status(404).json({error: 'Producto no encontrado'})
    } 
    let eliminar = await deleteItem(parseInt(req.params.id));

    res.status(200).json(eliminar);
    
  } catch (error) {
    res.status(500).send('Error de la aplicacion' + error);

  }
});





app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api', router);

app.listen(port, () => {
  
  return console.log(`Servidor listo en puerto ${port}`);
}).on('error', ()=>console.log('El puerto configurado se encuentra en uso'));

