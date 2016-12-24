import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobranza',
  templateUrl: './cobranza.component.html',
  styleUrls: ['./cobranza.component.css']
})
export class CobranzaComponent implements OnInit {

  cuotas =[];
  active:boolean;

  cuotasPorVencer = [
    {"id":1,"venc": new Date(),"monto":101000}
  ];

  cuotasVencidas = [
    {"id":1,"venc": new Date(2016, 10, 20),"monto":101000}
  ];

  constructor() { }

  ngOnInit() {
  }

  setPorVencer(){
    this.cuotas = this.cuotasPorVencer;
    this.active = true;
  }

  setVencidas(){
    this.cuotas = this.cuotasVencidas;
    this.active = false;
  }

}
