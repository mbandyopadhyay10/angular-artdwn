import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Angular App';
  courses=[1,2];
  viewMode="abcd";
  subjects=[
    {id:1, name: 'subject1' },
    {id:2, name: 'subject2' },
    {id:3, name: 'subject3' },

  ]
}
