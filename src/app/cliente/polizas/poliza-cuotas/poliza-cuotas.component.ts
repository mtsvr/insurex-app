import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-poliza-cuotas',
  templateUrl: './poliza-cuotas.component.html',
  styleUrls: ['./poliza-cuotas.component.css']
})
export class PolizaCuotasComponent implements OnInit {
  private sub: any;
  id:number;

  today: Date = new Date();

  poliza: any;
  total: number;

  cuotas =[
    {"id":1,"venc": new Date( this.today.getFullYear(), this.today.getMonth()+2, this.today.getDay() ),"monto":51000, pagado: false},
    {"id":2,"venc": new Date( this.today.getFullYear(), this.today.getMonth()+1, this.today.getDay() ),"monto":51000, pagado: false},
    {"id":3,"venc": new Date( this.today.getFullYear(), this.today.getMonth(), this.today.getDay() ),"monto":51000, pagado: false},
    {"id":4,"venc": new Date( this.today.getFullYear(), this.today.getMonth()-1, this.today.getDay() ),"monto":51000, pagado: false},
    {"id":5,"venc": new Date( this.today.getFullYear(), this.today.getMonth()-2, this.today.getDay() ),"monto":51000, pagado: true},
    {"id":6,"venc": new Date( this.today.getFullYear(), this.today.getMonth()-3, this.today.getDay() ),"monto":51000, pagado: true},
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.poliza = {"id":1,"numero":1034,"ramo":"Seguro de incendios","prima":300000,"nCuotas":6,"valorCuota":51000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"};

    this.total = this.poliza.nCuotas*this.poliza.valorCuota;

  }



}
