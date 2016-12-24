import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poliza-detail',
  templateUrl: './poliza-detail.component.html',
  styleUrls: ['./poliza-detail.component.css']
})
export class PolizaDetailComponent implements OnInit {

  pdfUrl: string;

  constructor() { }

  ngOnInit() {
    this.pdfUrl="https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf";
  }

}
