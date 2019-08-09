import { Component, OnInit } from '@angular/core';
import { EventoService } from './../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gevents',
  templateUrl: './gevents.page.html',
  styleUrls: ['./gevents.page.scss'],
})
export class GeventsPage implements OnInit {

  event: any[] = [];
  banner: string;
  icono: string;
  asistentes : any;
  //variable temporal
  evento: any = 1

  constructor(public api: EventoService, private router: Router) {
    this.getEvent();
  }

  getEvent(){
    this.api.getEventServi(1).subscribe(
      data =>{
        this.event = data.evento[0]
        this.banner = this.api.globalUrlImages + data.banner['imagen']
        this.icono = this.api.globalUrlImages + data.icono['imagen']
        this.asistentes = data.asistentes
        console.log(data);
      }
      ,error =>{
        console.log("noo");
      })
  }

  goToAttendantPage(){

  }

  ngOnInit() {
  }

}
