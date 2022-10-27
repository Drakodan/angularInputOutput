import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onomatopia ! (Q8)';

  constructor() { }
  onomatopiaList: Array<string> = [];

  onReceiveNewOnomatopia(event:any): void {
    console.log("event : " +event);
    this.onomatopiaList.push(event);
  }
}
