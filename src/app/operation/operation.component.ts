import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {TransfertService} from "../transfert.service";

@Component({
  selector: 'app-create-transfert',
  templateUrl: './create-transfert.component.html',
  styleUrls: ['./create-transfert.component.css']
})
export class CreateTransfertComponent implements OnInit {

  // @ts-ignore
  transfertForm: FormGroup;

  constructor(private tf: FormBuilder, private transfertService: TransfertService) {
  }

  ngOnInit(): void {

    this.transfertForm = this.tf.group({
      nom_emetteur: [''],
      prenom_emetteur: [''],
      tel_emetteur: [''],
      cin: [''],
      nom_recepteur: [''],
      prenom_recepteur: [''],
      tel_recepteur: [''],
      date: [''],
      montant: [''],
    });
  }

  onSubmit() {
    console.log('Tel Emetteur', this.transfertForm.value.tel_emetteur);
    this.transfertService.transfert(
      this.transfertForm.value.nom_emetteur,
      this.transfertForm.value.prenom_emetteur,
      this.transfertForm.value.tel_emetteur,
      this.transfertForm.value.cin,
      this.transfertForm.value.nom_recepteur,
      this.transfertForm.value.prenom_recepteur,
      this.transfertForm.value.tel_recepteur,
      this.transfertForm.value.date,
      this.transfertForm.value.montant,
    ).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error),
    )
  }

}
