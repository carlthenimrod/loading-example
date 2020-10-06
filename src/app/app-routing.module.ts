import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CResolver } from './c-resolver.service';

const routes: Routes = [
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent, resolve: { data: CResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
