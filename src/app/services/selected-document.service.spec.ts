import { TestBed } from '@angular/core/testing';

import { SelectedDocumentService } from './selected-document.service';

describe('SelectedDocumentService', () => {
  let service: SelectedDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
