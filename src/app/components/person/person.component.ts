import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() deleteEvent: EventEmitter<Person> = new EventEmitter();
  avatarUrl: String = "https://api.dicebear.com/6.x/bottts/svg";

  ngOnInit(): void {
    this.avatarUrl += `?seed=${this.person.firstName+this.person.lastName}`;
    console.log('avatarUrl: ', this.avatarUrl);
  }

  onDelete() {
    this.deleteEvent.emit(this.person)
  }
}
