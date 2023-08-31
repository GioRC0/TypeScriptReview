const developer = 'developer';
export function hello (who : string = 'developer'): string {
    return `hello, ${who}`;
}

let result: string = hello();
console.log(result);