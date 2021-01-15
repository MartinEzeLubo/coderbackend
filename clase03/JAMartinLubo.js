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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
function timeout(seconds) {
    let sec = 1;
    if (seconds) {
        sec = seconds;
    }
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
function mostrarPalabras(word, t) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(t);
        console.log(word);
    });
}
;
function displayText(text, time) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        let rawArray = text.split(/\b(\s+)/);
        let cleanArray = [];
        rawArray.forEach((e) => {
            if (e !== ' ') {
                cleanArray.push(e);
            }
        });
        try {
            for (var cleanArray_1 = __asyncValues(cleanArray), cleanArray_1_1; cleanArray_1_1 = yield cleanArray_1.next(), !cleanArray_1_1.done;) {
                let element = cleanArray_1_1.value;
                yield timeout(time).then(e => {
                    mostrarPalabras(element, time);
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cleanArray_1_1 && !cleanArray_1_1.done && (_a = cleanArray_1.return)) yield _a.call(cleanArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
;
displayText('La concha de tu madre', 3);
displayText('A la grande le puse cuca');
