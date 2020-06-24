import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLauchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-launch-list',
	templateUrl: './launch-list.component.html',
	styleUrls: ['./launch-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

	constructor(
		private pastLaunchesService: PastLauchesListGQL
	) { }

	pastLaunches$ = this.pastLaunchesService
	.fetch({ limit: 30 })
    .pipe(map((res) => res.data.launchesPast));

	ngOnInit(): void {
	}

}
