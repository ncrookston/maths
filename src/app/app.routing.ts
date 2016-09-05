import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kid/:id', component: KidsComponent}
];

export const routing = RouterModule.forRoot(routes);
