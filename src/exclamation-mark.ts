// символ опасного утверждения используется в крайних случаях когда мы точно уверены что значнеие есть

let word: string | null = null;
let num2 = 5;
if (num2 <= 5) {
    word = 'd';
}
console.log(word!.toLowerCase());

function printName(name?: string) {
    const fullName: string = name!;
}
