import Tarea from "./tarea";

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
}

export default Tareas;
