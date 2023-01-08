import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./features/parcels/components/list/list.component";

const routes: Routes = [
  { path: '', redirectTo: '/parcels', pathMatch: 'full' },
  {
    path: 'parcels',
    children: [
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
