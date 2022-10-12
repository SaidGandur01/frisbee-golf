import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frisbee } from '@utils/frisbee.interface';

@Component({
  selector: 'app-frisbee',
  templateUrl: './frisbee.component.html',
  styleUrls: ['./frisbee.component.scss'],
})
export class FrisbeeComponent implements OnInit {
  @Input() frisbee!: Frisbee;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetailsPage(cardId: number): void {
    this.router.navigate(['frisbees', cardId]);
  }

  changeSource(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '../../../assets/img/image-not-available.png';
  }
}
