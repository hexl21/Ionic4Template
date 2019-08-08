import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "https://testing.gevents.co/middleware/public/api/";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  getEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_menu_event_con_apk1/' + idEvento ,{ headers: httpHeaders }) 
  }

}
