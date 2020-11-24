  
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  private baseUrl = 'http://localhost:8080/api/transfert';

  constructor(private http: HttpClient) {
  }


  transfert(nom_emetteur: any, prenom_emetteur: any, tel_emetteur: any, cin: any, nom_recepteur: any, prenom_recepteur: any, tel_recepteur: any, date: any, montant: any): any {
    console.log('Tel Emetteur Service', tel_emetteur);

    return this.http.post<any>(this.baseUrl + '/valider?nom_emetteur=' + nom_emetteur + '&prenom_emetteur=' + prenom_emetteur + '&tel_emetteur=' + tel_emetteur + '&cin=' + cin + '&nom_recepteur=' + nom_recepteur + '&prenom_recepteur=' + prenom_recepteur + '&tel_recepteur=' + tel_recepteur + '&date=' + date + '&montant=' + montant + '', null);
  }
}