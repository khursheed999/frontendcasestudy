import { SelectedDocumentService } from './../../services/selected-document.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { stateDocuments } from '../../data/state-documents';
@Component({
  selector: 'app-dropdown-selectors-viewer',
  imports: [CommonModule,FormsModule],
  templateUrl: './dropdown-selectors-viewer.component.html',
  styleUrl: './dropdown-selectors-viewer.component.css'
})
export class DropdownSelectorsViewerComponent implements OnInit {
  selectedState: string = '';
  selectedDocument:any={}
  documentData:any[]=[]
  showDocument:boolean=false;
  stateData:string[]=stateDocuments.map(s=>s.state);


  constructor ( private SelectedDocumentService:SelectedDocumentService){

  }
  

  ngOnInit(): void {
   
    
  }
  onStateChange(): void {
    this.documentData = stateDocuments.find(s=>s.state===this.selectedState)?.documents||[]
    // this.selectedDocument=null;
  }
  onDocumentChange():void{

   this.selectedDocument=this.selectedDocument;
  this.SelectedDocumentService.setSelectedDocument(this.selectedDocument);
  // console.log(this.selectedDocument);
   
  }
  showDocumentfun(){
   this.showDocument=true;
    console.log('click')

  }
}
