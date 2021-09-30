import Tarea from "./tarea";
import colors from "colors";

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

    public borrarTarea( id: string ) {
        this.listado.forEach( tarea => {
            if(tarea.id === id) {
                this.listado = this.listado.filter(tarea => tarea.id !== id);
            }
        })
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
        let contador = 0;

        this.listado.forEach( tarea => {
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;

            if(completadas) {
                if(completadoEn) {
                    contador += 1;
                    console.log(`${contador + '.'.green} ${desc} :: ${colors.green(completadoEn)}`);
                }
            } else {
                if(!completadoEn) {
                    contador += 1;
                    console.log(`${contador + '.'.green} ${desc} :: ${estado}`);
                }
            }
        });
    }

    public toggleCompletadas(ids: string[]) {
        ids.forEach( id => {
            const tarea = this.listado.filter(tarea => tarea.id === id);
            if(!tarea[0].completadoEn) {
                tarea[0].completadoEn = new Date().toISOString();
            }
        });

        this.listado.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                const tareaCambiada = this.listado.filter( tareaIterada => tareaIterada.id === tarea.id);
                tareaCambiada[0].completadoEn = null;
            }
        })
    }
}

export default Tareas;
