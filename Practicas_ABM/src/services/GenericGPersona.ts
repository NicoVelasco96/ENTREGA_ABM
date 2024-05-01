import {persona} from "../types/persona";

abstract class GenericGPersona<T extends persona> {
    protected url : string;

    constructor(url : string) {
        this.url = url;
    }

    abstract getData(path: string): Promise<T>;

    abstract postData(path: String, data: T): Promise<T>;

    abstract putData(path: String, data: T): Promise<T>;

    abstract deleteData(path: string) : any;
}

export default GenericGPersona;