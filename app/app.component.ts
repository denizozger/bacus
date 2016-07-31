import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/person.component.html',
	providers: [PersonService]
})
export class AppComponent implements OnInit { 
	intervalInSeconds: number = 10;
	person: Person = { name: '', surname: '', gender: '', region: '' };
	error: any;

  constructor(
    private personService: PersonService
  ) { }

  getPerson() {
    this.personService
	    .getPerson()
	    .then(person => this.person = person)
	    .catch(error => this.error = error);
  }

  ngOnInit() {
  	var self = this;
  	(function getPersonInALoop() {
  	    self.getPerson();
  	    setTimeout(getPersonInALoop, self.intervalInSeconds * 1000);
  	})();
  }
  
}