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
        yield (() => {
            let rawArray = text.split(/\b(\s+)/);
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
            console.log(cleanArray);
            for (let word of cleanArray) {
                mostrarPalabras(word, sec);
            }
            message(cleanArray.length);
        });
    });
}
;
function textos() {
    return __awaiter(this, void 0, void 0, function* () {
        yield displayText('La concha de tu madre', jobFinished, 3);
        yield displayText('A la grande le puse cuca', jobFinished, 3);
        yield displayText('A la grande le puse cuca la concha de tu madre', jobFinished, 3);
    });
}
textos();
