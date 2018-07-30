import { Neuron } from "./neuron";

export class Project {
    constructor(obj) {
        this.id = obj.id;    
        this.name = obj.name;
        this.objective = obj.objective;
        this.video = obj.video;
    }
    id : number;
    name : string;
    objective : string;
    video : string;
}