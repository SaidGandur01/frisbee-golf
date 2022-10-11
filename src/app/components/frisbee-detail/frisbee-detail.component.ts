import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Frisbee } from '@utils/frisbee.interface';
import { FrisbeeService } from '@services/frisbee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frisbee-detail',
  templateUrl: './frisbee-detail.component.html',
  styleUrls: ['./frisbee-detail.component.scss'],
})
export class FrisbeeDetailComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  isDataAvailable!: boolean;

  cardId!: string;

  cardInformation!: Frisbee | undefined;

  constructor(
    private fs: FrisbeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIdUrlParam();
  }

  private getIdUrlParam(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params): void => {
        this.cardId = params['id'];
      })
    );
    this.isDataAvailable = this.cardId !== null && this.cardId !== undefined;
    this.isDataAvailable && this.getFrisbeeInformation();
  }

  navigateBack(): void {
    this.router.navigate(['frisbee']);
  }

  private getFrisbeeInformation(): void {
    this.subscriptions.push(
      this.fs
        .loadFrisbee(this.cardId)
        .subscribe((cardInfo: Frisbee | undefined) => {
          this.cardInformation = cardInfo;
          this.isDataAvailable = cardInfo !== undefined;
          // this.isDataAvailable = false;
        })
    );
    console.log({cardInfo: this.cardInformation});
  }

  ngOnDestroy(): void {
    this.subscriptions.map((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
