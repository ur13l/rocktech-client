import { Neuron } from "./neuron";

export const ROLE_ADMIN = 1; 
export const ROLE_USER = 2; 

export class User {
    constructor (obj : any) {
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.token = obj.token;
        this.neuron_id = obj.neuron_id;
        this.role = obj.role;
        this.approved = obj.approved;
        this.city = obj.city;
        this.state = obj.state;
        this.country = obj.country;
        this.phone = obj.phone;
        this.social_network = obj.social_network;
        this.complementary = obj.complementary;
        this.idea_complementation = obj.idea_complementation;
        this.idea_validation = obj.idea_validation;
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
    token : string;xw
    role : number;
    approved : boolean;
    city : string;
    state : string;
    country : string;
    phone : string;
    social_network : string;
    complementary : string;
    idea_complementation : boolean;
    idea_validation : boolean;
}