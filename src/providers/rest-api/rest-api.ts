import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class RestApiProvider {

  //private rteUrl = 'https://digital.iservices.rte-france.com//open_api/consumption/v1/short_term?type=REALISED,ID&start_date=2018-04-27T00:00:00%2B02:00&end_date=2018-04-27T00:00:00%2B02:00';
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');

  }

  /*
  getRteConsommation() {
    return 
      this.http.get(this.rteUrl+'/beared/xGWGjy1JEgUraj2Ut7SazQu32H7c97jpQcq83jkFhvJuIHusfxn6aw').subscribe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  */

  getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
