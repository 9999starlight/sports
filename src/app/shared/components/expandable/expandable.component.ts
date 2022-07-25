import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {
  isOpen = false;
  @Input('expandableName') expandableName = '';
  @Input('headerText') headerText = '';
  @Input('headerSubtitle') headerSubtitle = '';
  @Input('headerIcon') headerIcon = '';
  @Input('expandableContentClass') expandableContentClass = '';
  @Input('expandableWrapperClass') expandableWrapperClass = '';
  @Input('isStatic') isStatic = false;
  @Input('group') group = '';

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
