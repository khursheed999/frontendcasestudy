import { SelectedDocumentService } from './../../services/selected-document.service';
import { Component, OnInit } from '@angular/core';
import { Chart ,registerables} from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-chart-viewer',
  imports: [],
  templateUrl: './chart-viewer.component.html',
  styleUrl: './chart-viewer.component.css'
})
export class ChartViewerComponent implements OnInit{
selectedDocument:any={}
chart:any;
constructor(private SelectedDocumentService:SelectedDocumentService){}
  ngOnInit(): void {
    this.SelectedDocumentService.selectedDocument$.subscribe(document=>{
      this.selectedDocument=document;
      console.log(this.selectedDocument)
      this.createChart();
    })
  }
  
  createChart(): void {
    if (!this.selectedDocument?.graphData) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.selectedDocument.graphData.labels,
        datasets: [{
          label: this.selectedDocument.title,
          data: this.selectedDocument.graphData.values,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      }
    });
  }
  
}
