import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../_models/user';
import { Neuron } from '../_models/neuron';
import { Project } from '../_models/project';
import { Response } from '../_models/response';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends BaseService{

    public register(u : User, n : Neuron, p : Project ) {
        return this.http.post<Response<User>>(this.BASE_URL + 'user/register', {
          user: u,
          neuron: n,
          project: p
        }).map(response => {
            console.log(response);
            if (response && response.data && response.data.token) {
              sessionStorage.setItem('currentUser', JSON.stringify(response.data));
              sessionStorage.setItem('sessionToken', response.data.token);
            }
            return response;
        })
        
    }
}
