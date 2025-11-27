import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ReactiveFormComponent } from './layout/reactive-form/reactive-form.component';
import { DrivenFormComponent } from './layout/driven-form/driven-form/driven-form.component';
import { DetailProductComponent } from './layout/product/detail-product/detail-product.component';
import { AddProductComponent } from './layout/product/add-product/add-product.component';

const routes: Routes = [
  // { path :'events',  component : ListEventComponent},
  { path: '', redirectTo: 'events', pathMatch: 'full' }, // default route
  { path: 'products', component: ProductComponent },
  //{ path: 'products/:id', component: DetailProductComponent },
  { path: 'products/add-product', component: AddProductComponent },
  { path: 'products/:id', component: DetailProductComponent },

  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'driven', component: DrivenFormComponent },

  {
    path: 'events', loadChildren: () =>
      import('./features/events/events.module').then(m => m.EventsModule)
  },
  { path: 'tichets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'tichets', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'tichets', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: '**', component: NotFoundComponent }, // wildcard route for 404 not found page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
