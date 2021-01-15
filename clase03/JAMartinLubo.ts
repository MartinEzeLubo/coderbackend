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
    let rawArray = text.split(' ');
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
    
    let run = async (e:String[]) => {
        for (let i= 0; i< e.length; i++){
            await mostrarPalabras(e[i], sec);

        }
   
        
        message(e.length);
    }

    await run(cleanArray);
    


};

async function textos(){
    await displayText('Las leyes demasiado benignas rara vez son obedecidas las demasiado severas rara vez ejecutadas', jobFinished, 1);
    await displayText('Nadie se nos montará encima si no doblamos la espalda.', jobFinished, 0.5);
    await displayText('El brazo del universo moral es largo pero se dobla hacia la justicia', jobFinished);

}

textos();
