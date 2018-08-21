import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService{
    public countriesURL : string = environment.app_url + 'assets/json/countries.json'; 

    /** 
     * Get the list of all the countries
    */
    getCountries() {
      return this.http.get<any>(this.countriesURL) 
        .map(
          response => {
            return response;
          }
        )
    }
}
