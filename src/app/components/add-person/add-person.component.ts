import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  newPerson: Person = {} as Person;
  @Output() onAddPerson: EventEmitter<Person> = new EventEmitter();

  constructor(private personService: PersonService){}
  
  
  onSubmit(){
    if(!this.newPerson.firstName || !this.newPerson.lastName) {
      alert('Please fill out the form properly!');
      return;
    }
    this.onAddPerson.emit(this.newPerson);
    this.newPerson = {} as Person;
  }
}
