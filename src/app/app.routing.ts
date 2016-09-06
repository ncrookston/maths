import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';

const routes: Routes = [
  { path: 'maths', component: HomeComponent },
  { path: 'maths/kid/:id', component: KidsComponent}
];

export const routing = RouterModule.forRoot(routes);
