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
        tareas.cargarTareas(tareasDB);
    }

    await pausa();

    do {
        //Imprimir el menu y recibir la respuesta del usuario
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                //Crear una nueva tarea - Solicitar una description al user
                const desc = await leerInput("Description:");

                //Crear una nueva tarea
                tareas.crearTarea(desc);
                break;

            case "2":
                //Listar todas las tareas
                tareas.listadoCompleto();
                break;

            case '3':
                //Listar tareas completadas
                tareas.listarPendientes();
                break;
            
            case '4':
                tareas.listarPendientes(false);
                break;
        }

        guardarDB(tareas.listado);

        await pausa();
    } while (opt !== "0");
};

main();
