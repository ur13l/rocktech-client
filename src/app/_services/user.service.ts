import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../_models/user';
import { Neuron } from '../_models/neuron';
import { Project } from '../_models/project';
import { Response } from '../_models/response';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends BaseService{

    /**
     * Method to register User, Neuron and Project Idea
     * @param u 
     * @param n 
     * @param p 
     */
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

    /**
     * User authentication with email and password.
     * @param email 
     * @param password 
     */
    login(email: string, password: string) {
        return this.http.post<Response<User>>(this.BASE_URL + 'auth/login', { email: email, password: password })
            .map(response => {
                if (response && response.data && response.data.token) {
                    sessionStorage.setItem('currentUser', JSON.stringify(response.data));
                    sessionStorage.setItem('sessionToken', response.data.token);
                }
                return response;
            });
    }

    /** 
     * Close the user connection with the application. 
     * It removes the content in the session storage. This method does not make an AJAX request.
    */
    logout() {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('sessionToken');
        sessionStorage.removeItem('firsttime');
    }

    /**
     * User's activation with token generated
     * @param token 
     */
    activateUser(token : string) {
        return this.http.post<Response<boolean>>(this.BASE_URL + 'user/activate', {token : token})
            .map (response => {
                return response;
            });
    }

    /**
     * Called when the user tries to recover its password passing just the email.
     * @param email 
     */
    recoverPassword(email : string) {
        return this.http.post<Response<boolean>>(this.BASE_URL + 'reset/email', {email : email})
            .map(response => {
                return response;
            });
    }

    /**
     * Restore the user password when the data is correct.
     * @param email 
     * @param password 
     * @param confirmPassword 
     * @param token 
     */
    restorePassword( email : string, password : string, confirmPassword : string, token : string) {
        return this.http.post<Response<boolean>>(this.BASE_URL + 'reset/password', {email : email, token: token, password: password, password_confirmation: confirmPassword})
            .map(response => {
                return response;
            });
    }

    /**
     * Method to get user from session storage, doesn't make an AJAX request.
     */
    getUser() : User{
        if(sessionStorage.currentUser) {
            return new User(JSON.parse(sessionStorage.currentUser));
          }
          return null;
    }
    
    /** 
     * Get all users and his information
    */
    getUsers() {
        return this.http.get<Response<User[]>>(this.BASE_URL + 'user')
            .map(response => {
                return response;
            });
    }

    /** 
     * Get user by id
    */
   getUserById(id : number) {
    return this.http.get<Response<User>>(this.BASE_URL + 'user/' + id)
        .map(response => {
            return response;
        });
    }

    /**
     * Idea approval
     * @param id 
     */
    approve(id : number) {
        return this.http.post<Response<User>>(this.BASE_URL + 'user/approve', {id: id})
            .map(response => {
                return response;
            });
    }

    /**
     * Idea complementation by user
     * @param user 
     */
    complementation(user : User) {
        return this.http.post<Response<User>>(this.BASE_URL + 'user/idea-complementation', user)
        .map(response => {
            return response;
        });
    }

     /**
     * Idea approval
     * @param id 
     */
    validate(id : number) {
        return this.http.post<Response<User>>(this.BASE_URL + 'user/validate', {id: id})
            .map(response => {
                return response;
            });
    }

}
