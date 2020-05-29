import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PagesAddOrderComponent } from './pages/pages-add-order/pages-add-order.component';


const routes: Routes = [
  { path: '',
    component: PageListOrdersComponent,
    data: {title: 'Orders', subtitle: 'All orders'}
  },
  {
    path: 'add',
    component: PagesAddOrderComponent,
    data: {title: 'Orders', subtitle: 'Add an order'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes,
    )],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
