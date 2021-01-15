"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function timeout(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
function mostrarPalabras(word, t) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(t);
        console.log(word);
    });
}
;
function jobFinished(words) {
    console.log(`Proceso completo. Se imprimieron ${words} palabras`);
}
function displayText(text, message, seconds) {
    return __awaiter(this, void 0, void 0, function* () {
        let rawArray = text.split(' ');
        let cleanArray = [];
        let count = 0;
        let sec = 1;
        if (seconds) {
            sec = seconds;
        }
        rawArray.forEach((e) => {
            if (e !== ' ') {
                cleanArray.push(e);
                count++;
            }
        });
        let run = (e) => __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < e.length; i++) {
                yield mostrarPalabras(e[i], sec);
            }
            message(e.length);
        });
        yield run(cleanArray);
    });
}
;
function textos() {
    return __awaiter(this, void 0, void 0, function* () {
        yield displayText('Las leyes demasiado benignas rara vez son obedecidas las demasiado severas rara vez ejecutadas', jobFinished, 1);
        yield displayText('Nadie se nos montará encima si no doblamos la espalda.', jobFinished, 0.5);
        yield displayText('El brazo del universo moral es largo pero se dobla hacia la justicia', jobFinished);
    });
}
textos();
