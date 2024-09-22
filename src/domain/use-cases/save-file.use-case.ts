import fs from "fs";

export interface SavefileUseCase {
    execute : (options: Options) => boolean;
}

export interface Options {
    fileContent : string,
    fileDestination?: string,
    fileName?   : string,
}

export class Savefile implements SavefileUseCase{

    constructor(){

    }

execute({fileContent, fileDestination = `outputs`, fileName = 'table'} : Options): boolean {
    try {
        fs.mkdirSync(fileDestination, {recursive : true})
        fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
        console.log('file created');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
}