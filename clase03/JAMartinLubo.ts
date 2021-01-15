function timeout(seconds:number) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}
async function mostrarPalabras(word:String, t:number){
    await timeout(t);
    console.log(word);
};

function jobFinished(words:number){
    console.log(`Proceso completo. Se imprimieron ${words} palabras`);
}

async function displayText(text:String, message, seconds?:number){
    await (()=>{
        let rawArray = text.split(/\b(\s+)/);
        let cleanArray:String[] = [];
        let count:number = 0;
        let sec= 1;
        if (seconds){
            sec = seconds;
        }
    
        rawArray.forEach((e) => {
            if (e !== ' '){
                cleanArray.push(e);
                count++;
            }
        })
        console.log(cleanArray);
    
        for (let word of cleanArray){
            mostrarPalabras(word, sec);
    
        }
        message(cleanArray.length);


    });

    

    
    
};

async function textos(){
    await displayText('La concha de tu madre', jobFinished, 3);
    await displayText('A la grande le puse cuca', jobFinished, 3);
    await displayText('A la grande le puse cuca la concha de tu madre', jobFinished, 3);

}


textos();
