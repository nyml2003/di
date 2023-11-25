import {Container, load, Provider} from "../dependency_injection";
import {Singleton} from "../design_mode/singleton";
import {IOperation} from "./operation/IOperation";
@Provider("calculator")
class Calculator extends Singleton {
    protected constructor() {
        super();
        load(`${__dirname}\\operation`);
    }
    public exec(operation: string, args: number[]): number {
        return Container.getInstance().get(operation).operate(...args);
    }
}

export {Calculator};