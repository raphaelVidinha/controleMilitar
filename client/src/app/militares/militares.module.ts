import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MilitaresComponent } from './militares.component';
import { MilitaresCreateComponent } from './militares-create/militares-create.component';
import { MilitaresShowComponent } from './militares-show/militares-show.component';
import { MilitaresEditComponent } from './militares-edit/militares-edit.component';

const appRoutes: Routes = [
  { path: 'militares', component: MilitaresComponent },
  { path: 'militares/create', component: MilitaresCreateComponent },
  { path: 'militares/:id', component: MilitaresShowComponent },
  { path: 'militares/:id/edit', component: MilitaresEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [MilitaresComponent, MilitaresCreateComponent, MilitaresShowComponent, MilitaresEditComponent]
})
export class MilitaresModule { }
