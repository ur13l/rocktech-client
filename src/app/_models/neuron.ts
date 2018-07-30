import { User } from "./user";
import { Project } from "./project";

export class Neuron {
    constructor (obj : any) {
        this.id = obj.id;
        this.name = obj.name;
        this.leader_id = obj.leader_id;
        if(obj.project) {
            this.project = new Project(obj.project);        
        }
        this.members = [];        
        if(obj.members) {
            obj.members.forEach(member => {
                this.members.push(member);
            });
        }
    }
    id : number;
    name : string;
    leader_id : number;
    members : User[];
    project : Project;
}