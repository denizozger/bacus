import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PersonService {
	private peopleUrl = 'http://uinames.com/api/';

	constructor(private http: Http) { }

	getPerson() {
		return this.http.get(this.peopleUrl)
               .toPromise()
               .then(response => response.json() as Person)
               .catch(this.handleError);
	}

	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}