import { Component, OnDestroy, OnInit } from '@angular/core';
import { Frisbee } from '@utils/frisbee.interface';
import { FrisbeeService } from '@services/frisbee.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
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

  constructor(
    private fs: FrisbeeService,
    private router: Router,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.subscriptions.push(
      this.fs.loadFrisbeeData().subscribe((response: Frisbee[]) => {
        this.frisbeeList = response;
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
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
