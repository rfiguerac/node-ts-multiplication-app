import { boolean } from "yargs";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { Savefile } from "../domain/use-cases/save-file.use-case";


interface RunOptions{
    base : number;
    limit : number;
    showTable: boolean;
}

export class ServerApp {

    static run({base, limit, showTable} : RunOptions){

        console.log('server running...')

        const table = new CreateTable().execute({base , limit});
        const wasCreated = new Savefile().execute({fileContent : table, fileName : `Table${base}`})
        if(showTable) console.log(table);
    }
}