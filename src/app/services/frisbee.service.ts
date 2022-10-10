import { Injectable } from '@angular/core';
import { frisbeeData } from '@utils/frisbee-data';
import { Frisbee } from '@utils/frisbee.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrisbeeService {

  data: Frisbee[] = frisbeeData;

  loadFrisbeeData(): Observable<Frisbee[]> {
    return of(this.data);
  }

  loadFrisbee(id: string): Observable<Frisbee | undefined> {
    const idNumber = parseInt(id, 10);
    const frisbee = this.data.find((f) => f.id === idNumber);
    return of(frisbee);
  }
}
