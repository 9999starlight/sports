import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('selection') selection = '';
  @Input('value') value = 0;
  isSelected = false;

  onSelectionBet() {
    this.isSelected = !this.isSelected;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
