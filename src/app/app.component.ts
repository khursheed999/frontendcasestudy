import { Component, OnInit } from '@angular/core';
import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';
import { DropdownSelectorsViewerComponent } from './components/dropdown-selectors-viewer/dropdown-selectors-viewer.component';
import { ChartViewerComponent } from "./components/chart-viewer/chart-viewer.component";
import { CommonModule } from '@angular/common';
import { SelectedDocumentService } from './services/selected-document.service';

@Component({
  selector: 'app-root',
  imports: [DropdownSelectorsViewerComponent, ChartViewerComponent, DocumentViewerComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'frontendcasestudy';
  showDataButton:boolean=false;
  SelectedDocument:any={}
  constructor (private SelectedDocumentService:SelectedDocumentService){}
  ngOnInit(): void {
    this.SelectedDocumentService.selectedDocument$.subscribe(document=>{
      this.SelectedDocument=document;
    })
  }
  showData(){
   this.showDataButton=true;
  }
}
