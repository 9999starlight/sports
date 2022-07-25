import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroupList } from 'src/app/shared/interfaces/interfaces';
import { sportGroupGet } from 'src/app/store/actions/core.actions';
import { getGroupList, getLoading } from 'src/app/store/selectors/core.selectors';
import { Endpoints } from 'src/app/shared/endpoints/endpoints';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groupList$!: Observable<{results: GroupList[]}> | undefined;
  showLoading$: Observable<boolean> | undefined;
  list!: GroupList[]
  routeParams!: any
  subeventsMondiali = ''
  constructor(private store: Store, private route: ActivatedRoute) { 
    this.routeParams = this.route.snapshot.params;
    console.log(this.routeParams)
  }

  ngOnInit(): void {
    //console.log('endpoints: ', Endpoints.SubeventsMondiali);
    this.subeventsMondiali = Endpoints.SubeventsMondiali;
    this.showLoading$ = this.store.select(getLoading);
    this.store.dispatch(sportGroupGet(this.routeParams));
    this.groupList$ = this.store.select(getGroupList);

    //this.groupList$?.subscribe(res => {console.log('sport group:', res.results)})
  }
}
