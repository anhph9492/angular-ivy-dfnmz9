import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { Hero } from "./hero";
@Component({
  selector: "app-on-change-component",
  template: "<h1>{{hero.name}}</h1><h2></h2>"
})
export class OnChangeComponent implements OnChanges, OnInit {
  @Input() hero: Hero;
  // @Input() power: string;
  constructor() {
    console.log("constructor");
  }
  ngOnInit(): void {
    console.log("on init");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on change");
    for (const propName in changes) {
      // const chng = changes[propName];
      // const cur = JSON.stringify(chng.currentValue);
      // const prev = JSON.stringify(chng.previousValue);
      // console.log(prev + " - " + cur);
      console.log(propName);
    }
  }
}
