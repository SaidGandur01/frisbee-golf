import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrisbeeService } from '@services/frisbee.service';
import { Frisbee } from '@utils/frisbee.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frisbee-list',
  templateUrl: './frisbee-list.component.html',
  styleUrls: ['./frisbee-list.component.scss'],
})
export class FrisbeeListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  readonly frisbeesCategories: string[] = [
    'distance',
    'fairway',
    'midrange',
    'putter',
  ];

  frisbeeList!: Frisbee[];

  constructor(private fs: FrisbeeService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.fs.loadFrisbeeData().subscribe((response: Frisbee[]) => {
        this.frisbeeList = response;
      })
    );
  }

  goToDetailsPage(frisbeeId: number): void {
    this.router.navigate(['frisbees', frisbeeId]);
  }

  ngOnDestroy(): void {
    this.subscriptions.map((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
