import fs from "fs";
import Tarea from "../models/tarea";

//path global de la db
const archivo = "./database/data.json";

export const guardarDB = (data: Tarea[]) => {
    //Escribimos en el archivo data.json el array con las tareas en forma de string
    fs.writeFileSync(archivo, JSON.stringify(data));
};

type Data = Tarea[] | null;
export const leerDB = (): Data => {
    //Si no eixste el archivo, retornamos null
    if (!fs.existsSync(archivo)) {
        return null;
    }

    //Leemos la info de la db
    const info = fs.readFileSync(archivo, { encoding: "utf-8" });

    //Parseamos la data para poder manipularla
    const data = JSON.parse(info);

    return data;
};
