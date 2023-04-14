import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "This is a button"; //<-- This value acts as a default value
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
