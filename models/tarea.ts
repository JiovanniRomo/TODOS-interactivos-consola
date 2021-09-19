import { v4 } from "uuid";

class Tarea {
    public id: string;
    private desc: string;
    private completado: boolean;
    private completadoEn: Date | null;

    constructor(desc: string) {
        this.id = v4();
        this.desc = desc;
        this.completado = false;
        this.completadoEn = null;
    }
}

export default Tarea;
