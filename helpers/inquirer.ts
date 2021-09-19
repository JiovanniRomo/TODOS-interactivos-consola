import inquirer from "inquirer";
import colors from "colors";
import { QuestionCollection } from "inquirer";

const menuOpts: QuestionCollection = [
    {
        type: "list",
        name: "opcion",
        message: "Que desea hacer?",
        choices: [
            {
                value: "1",
                name: `${"1".green}. Crear tarea`,
            },
            {
                value: "2",
                name: `${"2".green}. Listar tareas`,
            },
            {
                value: "3",
                name: `${"3".green}. Listar tareas completadas`,
            },
            {
                value: "4",
                name: `${"4".green}. Listar tareas pendientes`,
            },
            {
                value: "5",
                name: `${"5".green}. Completar tarea(s)`,
            },
            {
                value: "6",
                name: `${"6".green}. Borrar tarea`,
            },
            {
                value: "0",
                name: `${"0".green}. Salir`,
            },
        ],
    },
];

export const inquirerMenu = async () => {
    console.clear();

    console.log("====================".green);
    console.log("Seleccione una opcion".white);
    console.log("====================\n".green);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;
};

export const pausa = async () => {
    const menuInputPause: QuestionCollection = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${colors.green("ENTER")} para continuar!`,
        },
    ];

    console.log("\n");
    await inquirer.prompt(menuInputPause);
};

export const leerInput = async (message: string) => {
    const question: QuestionCollection = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value: string) {
                if (value.length === 0) {
                    return "Por favor ingrese un valor";
                }
                return true;
            },
        },
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

// module.exports = {
//     inquirerMenu,
// };
