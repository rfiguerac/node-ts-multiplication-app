

import yargs, {options} from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multiplication table base' 
    })
    .options('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'multiplication table limit' 
    })
    .options('s',{
        alias: 'show',
        type: 'boolean',
        default:false,
        describe: 'show multiplication table base' 
    })
    .check((args , options) => {
        if(args.b < 1 ) throw 'base must be greater than 0';

        return true;
    })
    .parseAsync();