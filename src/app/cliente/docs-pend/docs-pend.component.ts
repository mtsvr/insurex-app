import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-pend',
  templateUrl: './docs-pend.component.html',
  styleUrls: ['./docs-pend.component.css']
})
export class DocsPendComponent implements OnInit {

  docs = [];
  active:boolean;

  docsPolizas = [
    {"id":1,"numero":10,"estado":"pendiente","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"id":2,"numero":15,"estado":"emitido","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"id":3,"numero":23,"estado":"rechazado","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"id":4,"numero":30,"estado":"pendiente","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
  ];

  docsEndosos = [
    {"id":1,"numero":8,"estado":"emitido","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"id":2,"numero":42,"estado":"rechazado","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
    {"id":3,"numero":13,"estado":"pendiente","pdfUrl":"http://www.cbu.edu.zm/downloads/pdf-sample.pdf"},
  ];

  constructor() { }

  ngOnInit() {
    this.setPolizas();
  }

  setPolizas() {
    this.docs = this.docsPolizas;
    this.active = true;
  }

  setEndosos(){
    this.docs = this.docsEndosos;
    this.active = false;
  }

}
