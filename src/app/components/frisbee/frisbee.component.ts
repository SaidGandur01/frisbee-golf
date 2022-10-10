import { Component, Input, OnInit } from '@angular/core';
import { Frisbee } from '@utils/frisbee.interface';

@Component({
  selector: 'app-frisbee',
  templateUrl: './frisbee.component.html',
  styleUrls: ['./frisbee.component.scss']
})
export class FrisbeeComponent implements OnInit {
  @Input() frisbee!: Frisbee;
  constructor() { }

  ngOnInit(): void {
  }

}
