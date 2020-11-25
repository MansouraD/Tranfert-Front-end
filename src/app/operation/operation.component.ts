import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransfertService } from '../transfert.service';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private service:TransfertService) { }

  ngOnInit(): void {

  }

  reception(data:NgForm){
   
    const nom_emetteur =data.value["nom_emetteur"];
    const prenom_emetteur  =data.value["prenom_emetteur"];
    const tel_emetteur =data.value["tel_emetteur"];
    const cin =data.value["cin"];

    const nom_recepteur =data.value["nom_recepteur"];
    const prenom_recepteur =data.value["prenom_recepteur"];
    const tel_recepteur =data.value["tel_recepteur"];

    const montant =data.value["montant"];
    const date =data.value["date"];

this.service.transfert(nom_emetteur, prenom_emetteur, tel_emetteur, cin, nom_recepteur, prenom_recepteur, tel_recepteur, montant, date);

  }


}