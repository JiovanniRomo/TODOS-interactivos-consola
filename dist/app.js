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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const guardarArchivo_1 = require("./helpers/guardarArchivo");
const inquirer_1 = require("./helpers/inquirer");
const Tareas_1 = __importDefault(require("./models/Tareas"));
console.clear();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt;
    const tareas = new Tareas_1.default();
    const tareasDB = (0, guardarArchivo_1.leerDB)();
    if (tareasDB) {
        tareas.cargarTareas(tareasDB);
    }
    yield (0, inquirer_1.pausa)();
    do {
        opt = yield (0, inquirer_1.inquirerMenu)();
        switch (opt) {
            case "1":
                const desc = yield (0, inquirer_1.leerInput)("Description:");
                tareas.crearTarea(desc);
                break;
            case "2":
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientes();
                break;
            case '4':
                tareas.listarPendientes(false);
                break;
        }
        (0, guardarArchivo_1.guardarDB)(tareas.listado);
        yield (0, inquirer_1.pausa)();
    } while (opt !== "0");
});
main();
//# sourceMappingURL=app.js.map