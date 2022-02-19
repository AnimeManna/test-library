import {ValidationInterface} from "./interface"

export class ValidationService implements ValidationInterface{

    public params: string[];
    constructor(params: string){
        this.params = Array.from(params);
    }

    get parameters() {
        return this.params;
    }

    isChanged(string: string){
        return string.length > 0;
    }

    isValid(string: string){
        return this.isChanged(string) && !this.params.some((char)=> string.includes(char));
    }
}