import { SelectedDocumentService } from './../../services/selected-document.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-document-viewer',
  imports: [CommonModule,FormsModule],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.css'
})
export class DocumentViewerComponent implements OnInit {
  selectedDocument:any={}

   constructor(private SelectedDocumentService:SelectedDocumentService){}
ngOnInit(): void {
 
  this.SelectedDocumentService.selectedDocument$.subscribe(document=>{
    this.selectedDocument=document;
    console.log(this.selectedDocument)
  })
}


}
