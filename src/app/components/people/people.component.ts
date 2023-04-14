import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person'
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    // this.people = this.personService.getPeople();
    this.personService.getPeople().subscribe( result => this.people = result);
  }

  deletePerson(person: Person) {
    if(person.id) {
      this.personService.deletePerson(person.id).subscribe(() => {
        this.people = this.people.filter(p => p.id != person.id)
      });
    }
  }

  addPerson(person: Person){
    this.personService.addPerson(person)
    .subscribe((result: Person) => this.people.push(result));
  }
}
