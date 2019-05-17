import { Component, Input } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h2>{{title}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
              </ul>`,
  styles: [`h1 { font-family: sans-serif; }`],
})
export class CoursesComponent {
  title = 'My favourite Courses';
  courses 
}

