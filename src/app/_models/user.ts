import { Neuron } from "./neuron";

export class User {
    constructor (obj : any) {
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.token = obj.token;
        this.neuron_id = obj.neuron_id;
        if(obj.neuron) {
            this.neuron = new Neuron(obj.neuron);        
        }
    }
    id : number;
    name : string;
    email : string;
    password : string;
    confirm_password : string;
    neuron_id : number;
    neuron : Neuron;
    token : string;
}