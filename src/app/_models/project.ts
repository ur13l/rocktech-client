import { Neuron } from "./neuron";

export class Project {
    constructor(obj) {
        this.id = obj.id;    
        this.name = obj.name;
        this.objective = obj.objective;
        this.video = obj.video;
        this.stage = obj.stage;
        this.info = obj.info;
        this.doc = obj.doc;
    }
    id : number;
    name : string;
    objective : string;
    video : string;
    stage : string;
    info : string
    doc: string;
}