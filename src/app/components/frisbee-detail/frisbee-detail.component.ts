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

  frisbeeId!: string;

  frissbeInformation!: Frisbee | undefined;

  constructor(
    private fs: FrisbeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getIdUrlParam();
  }

  private getIdUrlParam(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params): void => {
        this.frisbeeId = params['id'];
        this.frisbeeId && this.getFrisbeeInformation();
      })
    );
  }

  navigateBack(): void {
    this.router.navigate(['frisbee']);
  }

  private getFrisbeeInformation(): void {
    this.subscriptions.push(
      this.fs
        .loadFrisbee(this.frisbeeId)
        .subscribe((frisbeeInfo: Frisbee | undefined) => {
          this.frissbeInformation = frisbeeInfo;
        })
    );
  }

  changeImageSource(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '../../../assets/img/image-not-available.jpeg';
  }

  ngOnDestroy(): void {
    this.subscriptions.map((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
