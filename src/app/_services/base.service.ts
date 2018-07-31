import { Injectable } from '@angular/core';
import { HttpClient } from '../_utils/http-client';

@Injectable()
export class BaseService {

  /**
   * Backend URL constant, most of the requests will be going to this address.
   */
  public BASE_URL = "http://rocktech.api/api/";
  
  /**
   * Represents the Bearer Token used in the authentication process, every call to an
   * endpoint with auth validation have to receive the user's token
   * this value is only obtained in the login/register call.
   */
  public token : string;


  constructor(
    public http : HttpClient
  ) { }

}
