import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditmomentComponent } from './components/page/editmoment/editmoment.component';
import { MomentsComponent } from './components/page/moments/moments.component';
import { NewmomentsComponent } from './components/page/newmoments/newmoments.component';

const routes: Routes = [
  { path: '', component: MomentsComponent },
  { path: 'newmoments', component: NewmomentsComponent },
  { path: 'EditmomentComponent/:id', component: EditmomentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
