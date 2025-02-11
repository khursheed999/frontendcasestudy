import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SelectedDocumentService {
  private selectedDocument=new BehaviorSubject<any>(null);
  selectedDocument$=this.selectedDocument.asObservable();
  setSelectedDocument(document:any){
    this.selectedDocument.next(document);
  }
}
