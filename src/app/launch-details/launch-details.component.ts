import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LauchDetailsGQL } from '../services/spacexGraphql.service'
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-launch-details',
	templateUrl: './launch-details.component.html',
	styleUrls: ['./launch-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private launchDetailsService: LauchDetailsGQL
	) { }

	launchDetails$ = this.route.paramMap.pipe(
		switchMap(params => {
			const id = params.get('id');
			return this.launchDetailsService.fetch({ id });
		}),
		map(res => res.data.launch)
	);

	ngOnInit(): void {
	}

}
