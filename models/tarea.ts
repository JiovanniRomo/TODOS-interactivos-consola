import { v4 } from "uuid";

class Tarea {
    public id: string;
    public desc: string;
    public completado: boolean;
    public completadoEn: null | string;

    constructor(desc: string) {
        this.id = v4();
        this.desc = desc;
        this.completado = false;
        this.completadoEn = null;
    }
}

export default Tarea;
