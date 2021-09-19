import "colors";
import { guardarDB, leerDB } from "./helpers/guardarArchivo";
import { inquirerMenu, pausa, leerInput } from "./helpers/inquirer";
import Tareas from "./models/Tareas";

console.clear();

const main = async () => {
    let opt: string;
    const tareas = new Tareas(); //!Las tareas siempre se mantienen iguales porque estan fuera del loop

    //Recuperamos la data de la db
    const tareasDB = leerDB();

    if (tareasDB) {
        // TODO: cargarTareas
        tareas.cargarTareas(tareasDB);
    }

    await pausa();

    do {
        //Imprimir el menu y recibir la respuesta del usuario
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const desc = await leerInput("Description:");
                tareas.crearTarea(desc);
                break;

            case "2":
                console.log(tareas.listado);
                break;
        }

        guardarDB(tareas.listado)

        await pausa();
    } while (opt !== "0");
};

main();
