import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-on-change-parent-component',
  templateUrl: './on-change-parent.component.html'
})
export class OnChangeParentComponent {
  hero: Hero = {id: '1', name: 'join', phone: 986};
  // power = '';
  constructor() { }
}