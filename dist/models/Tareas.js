"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tarea_1 = __importDefault(require("./tarea"));
const colors_1 = __importDefault(require("colors"));
class Tareas {
    constructor() {
        this.listado = [];
    }
    crearTarea(desc) {
        const tarea = new tarea_1.default(desc);
        this.listado = [...this.listado, tarea];
    }
    borrarTarea(id) {
        this.listado.forEach(tarea => {
            if (tarea.id === id) {
                this.listado = this.listado.filter(tarea => tarea.id !== id);
            }
        });
    }
    cargarTareas(tareas) {
        tareas.forEach((tareaArr) => {
            this.listado = [...this.listado, tareaArr];
        });
    }
    listadoCompleto() {
        console.log("\n");
        this.listado.forEach((tarea, index) => {
            const { desc, completadoEn } = tarea;
            const idx = `${index + 1}`.green;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;
            console.log(`${idx} ${desc} :: ${estado}`);
        });
    }
    listarPendientes(completadas = true) {
        console.log("\n");
        let contador = 0;
        this.listado.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;
            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${contador + '.'.green} ${desc} :: ${colors_1.default.green(completadoEn)}`);
                }
            }
            else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${contador + '.'.green} ${desc} :: ${estado}`);
                }
            }
        });
    }
    toggleCompletadas(ids) {
        ids.forEach(id => {
            const tarea = this.listado.filter(tarea => tarea.id === id);
            if (!tarea[0].completadoEn) {
                tarea[0].completadoEn = new Date().toISOString();
            }
        });
        this.listado.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                const tareaCambiada = this.listado.filter(tareaIterada => tareaIterada.id === tarea.id);
                tareaCambiada[0].completadoEn = null;
            }
        });
    }
}
exports.default = Tareas;
//# sourceMappingURL=Tareas.js.map