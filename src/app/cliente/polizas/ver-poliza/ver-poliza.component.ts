import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-poliza',
  templateUrl: './ver-poliza.component.html',
  styleUrls: ['./ver-poliza.component.css']
})
export class VerPolizaComponent implements OnInit {

  polizas = [
    {"id":1,"numero":1034,"ramo":"Seguro de incendios","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
    {"id":2,"numero":1185,"ramo":"Seguro de robo con fuerza","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
    {"id":3,"numero":15919,"ramo":"Seguro de automóvil","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
    {"id":4,"numero":1123,"ramo":"Seguro de equipo contratista","prima":300000,"pdfUrl":"https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
