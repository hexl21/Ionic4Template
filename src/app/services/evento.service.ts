import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "https://testing.gevents.co/middleware/public/api/";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  public globalUrlImages: string = "https://testing.gevents.co/middleware/public/images/events/"

  constructor(private http: HttpClient) { }

  getEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_menu_event_con_apk1/' + idEvento ,{ headers: httpHeaders }) 
  }

  getAsistEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_assistentes_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getStandEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_expositores_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

}
