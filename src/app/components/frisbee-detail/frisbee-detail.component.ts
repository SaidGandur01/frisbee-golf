import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrisbeeService } from '@services/frisbee.service';

@Component({
  selector: 'app-frisbee-detail',
  templateUrl: './frisbee-detail.component.html',
  styleUrls: ['./frisbee-detail.component.scss']
})
export class FrisbeeDetailComponent implements OnInit {



  constructor(private fs: FrisbeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  private getIdUrlParam(): void {
    const frisbeeId = this.route.snapshot.params["id"];
    console.log('url id param: ', frisbeeId);
  }

}
