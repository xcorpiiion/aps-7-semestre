import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public content: string;
  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
