import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() deleteEvent: EventEmitter<Person> = new EventEmitter();

  onDelete() {
    this.deleteEvent.emit(this.person)
  }
}
