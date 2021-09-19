"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tarea_1 = __importDefault(require("./tarea"));
class Tareas {
    constructor() {
        this.listado = [];
    }
    crearTarea(desc) {
        const tarea = new tarea_1.default(desc);
        this.listado = [...this.listado, tarea];
    }
    cargarTareas(tareas) {
        tareas.forEach((tareaArr) => {
            this.listado = [...this.listado, tareaArr];
        });
    }
}
exports.default = Tareas;
//# sourceMappingURL=Tareas.js.map