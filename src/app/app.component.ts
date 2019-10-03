import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'directives';
  choice = '3';
  color = 'blue';
  fontSize = 12;

  isBordered: boolean;
  classesObj: object;
  classList: string[];

  people = [
    {
      name: 'Hola',
      age: 25,
      city: 'New York'
    },
    {
      name: 'Mad',
      age: 32,
      city: 'Malb'
    },
    {
      name: 'Roma',
      age: 42,
      city: 'Rome'
    }
  ]

  ngOnInit() {
    this.isBordered = false;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder() {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      boardered: this.isBordered
    };
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }
}
