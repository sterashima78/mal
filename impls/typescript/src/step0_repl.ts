import { createInterface } from "node:readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.setPrompt("user> ")

// READ
function read(str: string): any {
    // TODO
    return str;
}

// EVAL
function evalMal(ast: any, _env?: any): any {
    // TODO
    return ast;
}

// PRINT
function print(exp: any): string {
    // TODO
    return exp;
}

function rep(str: string): string {
    // TODO
    return print(evalMal(read(str)));
}

const main = ()=> {
    rl.question("user> ", (line)=> {
        if (line == null) {
            return
        }
        if (line === "") {
            main()
            return
        }
        console.log(rep(line));    
        main()
    })
}

main()