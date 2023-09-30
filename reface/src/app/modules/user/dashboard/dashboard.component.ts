import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Card[] = [];

  constructor() {}

  ngOnInit(): void {
    for(let i=1;i<=40;i++){
      this.cards.push({
        id: i,
        name: "card "+ i
      });
    }
  }
}
