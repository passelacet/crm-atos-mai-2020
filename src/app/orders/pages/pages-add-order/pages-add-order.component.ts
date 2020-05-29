import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-pages-add-order',
  templateUrl: './pages-add-order.component.html',
  styleUrls: ['./pages-add-order.component.scss']
})
export class PagesAddOrderComponent implements OnInit {
  public title :string;
  public subtitle :string;
  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas) => {
      //console.log(datas);
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    })
  }

  public add(item: Order) {
    this.os.add(item).subscribe((res) => {
      console.log(res);
      // redirection vers la route orders
      //this.router.navigate(['orders']);
      this.router.navigate(['../'], {relativeTo:this.route})
    })
  }

}
