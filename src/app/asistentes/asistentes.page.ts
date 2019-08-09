import { Component, OnInit } from '@angular/core';
import { EventoService } from './../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.page.html',
  styleUrls: ['./asistentes.page.scss'],
})
export class AsistentesPage implements OnInit {

  asistentes: any
  dataAssis: any[] = [];

  constructor(public api: EventoService, private router: Router) { 
    this.getAsistentes()
  }

  getAsistentes(){
    this.api.getAsistEventServi(1).subscribe(
      data =>{
        this.asistentes = data.asistentes
        this.dataAssis = data['datos']
      }
      ,error =>{
        console.log("noo");
      })
  }

  ngOnInit() {
  }

}
