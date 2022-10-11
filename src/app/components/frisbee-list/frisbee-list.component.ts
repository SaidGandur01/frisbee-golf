import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrisbeeService } from '@services/frisbee.service';
import { frisbeeData } from '@utils/frisbee-data';
import { Frisbee } from '@utils/frisbee.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frisbee-list',
  templateUrl: './frisbee-list.component.html',
  styleUrls: ['./frisbee-list.component.scss'],
})
export class FrisbeeListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  readonly frisbeesCategories: string[] = [
    'distance',
    'fairway',
    'midrange',
    'putter',
  ];

  cardsList!: Frisbee[];

  constructor(private fs: FrisbeeService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.fs.loadFrisbeeData().subscribe((response: Frisbee[]) => {
        this.cardsList = response;
      })
    );
    console.log({ data: this.cardsList });
  }

  goToDetailsPage(cardId: number): void {
    console.log({ id: cardId });
    this.router.navigate(['frisbees', cardId]);
  }

  ngOnDestroy(): void {
    this.subscriptions.map((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
