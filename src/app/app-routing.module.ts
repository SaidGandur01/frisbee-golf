import { FrisbeeDetailComponent } from '@components/frisbee-detail/frisbee-detail.component';
import { FrisbeeListComponent } from '@components/frisbee-list/frisbee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "frisbees", component: FrisbeeListComponent },
  { path: "frisbees/:id", component: FrisbeeDetailComponent},
  { path: '', redirectTo: "frisbees", pathMatch: 'full' },
  { path: "**", redirectTo: "frisbees" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
