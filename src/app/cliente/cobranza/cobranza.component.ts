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
    {"id":1,"venc": new Date(2017,0,10),"monto":101000,"num":5,"nCuotas":20,"poliza":1034,"ramo":"Seguro de incendios"},
    {"id":2,"venc": new Date(2016,11,31),"monto":21000,"num":10,"nCuotas":25,"poliza":15919,"ramo":"Seguro de automovil"}
  ];

  cuotasVencidas = [
    {"id":1,"venc": new Date(2016, 10, 20),"monto":101000,"num":3,"nCuotas":20,"poliza":1034,"ramo":"Seguro de incendios"},
    {"id":2,"venc": new Date(2016,10,31),"monto":21000,"num":9,"nCuotas":25,"poliza":15919,"ramo":"Seguro de automovil"},
    {"id":3,"venc": new Date(2016,9,31),"monto":21000,"num":8,"nCuotas":25,"poliza":15919,"ramo":"Seguro de automovil"}
  ];

  constructor() { }

  ngOnInit() {
    this.setPorVencer();
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
