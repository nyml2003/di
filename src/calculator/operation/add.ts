import {Provider} from "../../dependency_injection";
import {IOperation} from "./IOperation";

@Provider('add')
export class Add implements IOperation {
    operate(...args: any[]): any {
        try {
            return args.reduce((a, b) => a + b);
        } catch (e : Error | any) {
            console.log(e.message || e);
        }
    }
}