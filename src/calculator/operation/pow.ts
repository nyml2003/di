import {Provider} from "../../dependency_injection";
import {IOperation} from "./IOperation";

@Provider('pow', [])
export class Pow implements IOperation {
    operate(...args: any[]): any {
        try {
            if (args.length !== 2) {
                throw new Error('Pow operation only accept two arguments.');
            }
            if (args[1] === 0) {
                return 1;
            }
            return args[0] ** args[1];
        } catch (e : Error | any) {
            console.log(e.message || e);
        }
    }
}