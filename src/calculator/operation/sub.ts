import {Provider} from "../../dependency_injection";
import {IOperation} from "./IOperation";

@Provider('sub', [])
export class Sub implements IOperation {
    operate(...args: any[]): any {
        try {
            if (args.length !== 2) {
                throw new Error('Sub operation only accept two arguments.');
            }
            return args[0] - args[1];
        } catch (e : Error | any) {
            console.log(e.message || e);
        }

    }
}