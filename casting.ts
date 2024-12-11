let x: unknown = 4;
console.log((x as string).length);

let y: unknown = 'hello';
console.log((<string>y).length);