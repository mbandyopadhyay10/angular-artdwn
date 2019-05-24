import { Component, Input } from '@angular/core';
import {CoursesService} from './courses.service'

@Component({
  selector: 'courses',
  template: `<h2>{{title}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
              </ul>
              <input [(ngModel)]="email" (keyup.enter)="onEnterClick()">
              `,
  styles: [`h1 { font-family: sans-serif; }`],
})
export class CoursesComponent {
  title = 'My favourite Courses';
  courses ;
  email="m.bandyopadhyay@gmail.com";

  constructor(service :CoursesService){
      this.courses = service.getCourses();
  }
  onEnterClick(){
    console.log(this.email);
  }
}

