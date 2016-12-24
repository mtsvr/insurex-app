import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poliza-endosos',
  templateUrl: './poliza-endosos.component.html',
  styleUrls: ['./poliza-endosos.component.css']
})
export class PolizaEndososComponent implements OnInit {

  endosos =[
    {"numero":1,"resumen":"Repactación de Prima","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"numero":2,"resumen":"Extension","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"numero":3,"resumen":"Otro","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
