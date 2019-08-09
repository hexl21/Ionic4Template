import { Component, OnInit } from '@angular/core';
import { EventoService } from './../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.page.html',
  styleUrls: ['./stands.page.scss'],
})
export class StandsPage implements OnInit {
  dataExpositores: any[] = [];

  constructor(public api: EventoService, private router: Router) {
    this.getStands()
  }

  getStands(){
    this.api.getStandEventServi(1).subscribe(
      data =>{
        this.dataExpositores = data['stands']
        console.log(this.dataExpositores)
      }
      ,error =>{
        console.log("noo");
      })
  }

  ngOnInit() {
  }

}
