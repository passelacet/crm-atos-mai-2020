import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  //public collection: Order[];
  public collection$: Subject<Order[]> = new Subject();
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public title: string;
  public subtitle: string;
  //private sub: Subscription;
  public states = Object.values(StateOrder);
  constructor(
    private os: OrdersService,
    public route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {

    this.btnRoute = {
      label: 'Add an order',
      route: 'add'
    }
    this.btnHref = {
      label: 'Go to Google',
      href: 'https://www.google.com'
    }
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    }
    this.os.collection.subscribe((col) => {
      this.collection$.next(col);
    })
    //this.os.collection.subscribe((datas) => {
      //console.log(datas);
    //  this.collection = datas;
    //});
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      //console.log(res);
      item.state = res.state;
    });
    //console.log(item, event.target.value);

  }

  public openPopUp() {
    console.log('open popup');
  }

  ngOnDestroy(): void {
    //this.sub.unsubscribe()
  }

  public delete(item: Order) {
    this.os.delete(item).subscribe((res) => {
      this.os.collection.subscribe((datas) => {
        this.collection$.next(datas);
      })
    });

  }
}
