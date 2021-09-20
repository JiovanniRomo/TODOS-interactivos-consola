import Tarea from "./tarea";
import "colors";

class Tareas {
    public listado: Tarea[];

    constructor() {
        this.listado = [];
    }

    public crearTarea(desc: string) {
        //Creamos una nueva tarea
        const tarea = new Tarea(desc);

        //Y despues la agregamos al listado
        this.listado = [...this.listado, tarea];
    }

    public cargarTareas(tareas: Tarea[]) {
        tareas.forEach((tareaArr) => {
            this.listado = [...this.listado, tareaArr];
        });
    }

    public listadoCompleto() {
        console.log("\n");
        this.listado.forEach((tarea, index) => {
            const { desc, completadoEn } = tarea;
            const idx = `${index + 1}`.green;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;

            console.log(`${idx} ${desc} :: ${estado}`);
        });
    }

    public listarPendientes( completadas = true ) {
        console.log("\n");
        let contador: number = 0;

        this.listado.forEach( tarea => {
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;

            if(completadas) {
                if(completadoEn) {
                    contador += 1;
                    console.log(`${contador + '.'.green} ${desc} :: ${completadoEn}`);
                }
            } else {
                if(!completadoEn) {
                    contador += 1;
                    console.log(`${contador + '.'.green} ${desc} :: ${estado}`);
                }
            }

        });
    }
}

export default Tareas;
