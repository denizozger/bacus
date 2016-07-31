import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Random person every few seconds</h1>
  	<div><label>Name: </label>{{person.name}}</div>
  	<div><label>Surname: </label>{{person.surname}}</div>
  	<div><label>Gender: </label>{{person.gender}}</div>
  	<div><label>Region: </label>{{person.region}}</div>`,
	providers: [PersonService]
})
export class AppComponent implements OnInit { 
	person: Person = {}
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
    this.getPerson();
  }
  
}