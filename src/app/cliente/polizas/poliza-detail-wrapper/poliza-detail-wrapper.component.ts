import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-poliza-detail-wrapper',
  templateUrl: './poliza-detail-wrapper.component.html',
  styleUrls: ['./poliza-detail-wrapper.component.css']
})
export class PolizaDetailWrapperComponent implements OnInit {
  id: number;
  private sub: any;

  poliza: any;

  polizas = [
    {"id":1,"numero":1034,"ramo":"Seguro de incendios","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
    {"id":2,"numero":1185,"ramo":"Seguro de robo con fuerza","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
    {"id":3,"numero":15919,"ramo":"Seguro de automóvil","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
    {"id":4,"numero":1123,"ramo":"Seguro de equipo contratista","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.poliza = this.findById(this.id);
  }

  findById(id: number): any {
    for (let poliza of this.polizas){
      if (id == poliza.id){
        return poliza;
      }
    }
  }

}
