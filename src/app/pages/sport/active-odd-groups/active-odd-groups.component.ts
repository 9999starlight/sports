import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActiveOddGroupsMondiali } from 'src/app/shared/interfaces/interfaces';
import { AppState } from 'src/app/store';
import { getActiveOddGroups, getLoading } from 'src/app/store/selectors/core.selectors';

@Component({
  selector: 'app-active-odd-groups',
  templateUrl: './active-odd-groups.component.html',
  styleUrls: ['./active-odd-groups.component.scss']
})
export class ActiveOddGroupsComponent implements OnInit {
  showLoading$: Observable<boolean> | undefined;
  activeOddGroups$: Observable<{ results: ActiveOddGroupsMondiali[] }> | undefined;
  @Output() close = new EventEmitter();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.activeOddGroups$ = this.store.select(getActiveOddGroups);
  }

  onBackClick() {
    this.close.emit();
  }
}
