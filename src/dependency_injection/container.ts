import { Singleton } from "../design_mode/singleton";

export class Container extends Singleton {
    private Registry: Map<string, any> = new Map<string, any>();
    public register(identifier: string, constructor: any, args: any[]) {
        if (this.Registry.has(identifier)) {
            throw new Error(`Identifier ${identifier} is already registered.`);
        }
        this.Registry.set(identifier, {constructor, args});
    }

    public get(identifier: string) : any {
        if (!this.Registry.has(identifier)) {
            return null;
        }
        const {constructor, args} = this.Registry.get(identifier);
        const params = args.map((arg: string) => this.get(arg));
        return new constructor(...params);
    }

    public get_impl(interface_class: any) : any {
        return Array.from(this.Registry.values()).filter((value) => value.constructor.prototype instanceof interface_class).map((value) => this.get(value.constructor.name));
    }
}