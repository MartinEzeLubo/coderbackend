const express = require("express");
const app = express();


app.use(express.static("public"));

function dataGenerator(){
  let idValue = Math.floor(Math.random() * (11 - 1)) + 1;
  let prdValue = Math.floor(Math.random() * (11 - 1)) + 1;
  let priceValue = Math.random() * (10000 - 0) + 0;
  priceValue = priceValue.toFixed(2);
  let picValue = Math.floor(Math.random() * (11 - 1)) + 1;
  
  return {id: idValue,
         title: 'Producto '+prdValue,
         price: priceValue,
         thumbnail: 'Foto '+picValue
         };  
}
  

app.get("/", (request, response) => {
  
    let data = dataGenerator();
  
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(data));
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  
  console.log("Your app is listening on port " + listener.address().port);
});
