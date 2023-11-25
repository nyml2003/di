import {Provider} from "../../dependency_injection";
import {IOperation} from "./IOperation";

@Provider('div', [])
export class Div implements IOperation {
    operate(...args: any[]): any {
        try {
            if (args.length !== 2) {
                throw new Error('Div operation only accept two arguments.');
            }
            if (args[1] === 0) {
                throw new Error('Divisor cannot be zero.');
            }
            return args[0] / args[1];
        } catch (e : Error | any) {
            console.log(e.message || e);
        }

    }
}