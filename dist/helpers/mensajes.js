"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pausa = exports.mostrarMenu = void 0;
const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log("====================".green);
        console.log("Seleccione una opcion".green);
        console.log("====================\n".green);
        console.log(`${"1".green}.- Crear una tarea`);
        console.log(`${"2".green}.- Listar tareas`);
        console.log(`${"3".green}.- Tareas completadas`);
        console.log(`${"4".green}.- Tareas pendientes`);
        console.log(`${"5".green}.- Completar tareas`);
        console.log(`${"6".green}.- Borrar tareas`);
        console.log(`${"0".green}.- Salir \n`);
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("Seleccione una opcion: ", (opt) => {
            console.log(opt);
            readline.close();
            resolve(opt);
        });
    });
};
exports.mostrarMenu = mostrarMenu;
const pausa = () => {
    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(`\nPresione ${"Enter".green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
};
exports.pausa = pausa;
//# sourceMappingURL=mensajes.js.map