import {Component,Input} from '@angular/core';

@Component({
  selector : 'courses',
  template :`<h2>{{title}}</h2>`,
  styles: [`h1 { font-family: sans-serif; }`],
})
export class CoursesComponent{
  title='My favourite Courses';
}

