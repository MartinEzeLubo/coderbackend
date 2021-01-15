function timeout(seconds?:number) {
    let sec= 1;
    if (seconds){
        sec = seconds;
    }
    return new Promise(resolve => setTimeout(resolve, sec*1000));
}
async function mostrarPalabras(word:String, t:number){
    await timeout(t);
    console.log(word);
};


async function displayText(text:String, time?:number){

    let rawArray = text.split(/\b(\s+)/);
    let cleanArray:String[] = [];
    
    rawArray.forEach((e) => {
        if (e !== ' '){
            cleanArray.push(e);
        }
    })

    for await (let element of cleanArray){
        await timeout(time).then( e => {
            
            mostrarPalabras(element, time);
        }); 

    }

    
    
};

displayText('La concha de tu madre', 3);
displayText('A la grande le puse cuca');

