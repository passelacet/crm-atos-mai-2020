import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { Btn } from 'src/app/shared/interfaces/btn';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);

  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'All clients';
    this.btnRoute = {
      label: 'Add an client',
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
    this.collection$ = this.os.collection;
    //this.os.collection.subscribe((datas) => {
      //console.log(datas);
    //  this.collection = datas;
    //});
    this.headers = [
      'Name',
      'Comment',
      'CA',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Client, event) {
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

}
