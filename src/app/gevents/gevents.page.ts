import { Component, OnInit } from '@angular/core';
import { EventoService } from './../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gevents',
  templateUrl: './gevents.page.html',
  styleUrls: ['./gevents.page.scss'],
})
export class GeventsPage implements OnInit {

  constructor(public api: EventoService, private router: Router) {
    this.getEvent();
  }

  getEvent(){
    this.api.getEventServi(1).subscribe(
      data =>{
        console.log(data);
      }
      ,error =>{
        console.log("noo");
      })
  }

  ngOnInit() {
  }

}
