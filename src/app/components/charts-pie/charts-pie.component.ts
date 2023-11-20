import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartItem, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-charts-pie',
  templateUrl: './charts-pie.component.html',
  styleUrls: ['./charts-pie.component.scss']
})
export class ChartsPieComponent implements OnInit{

  @Input() dataLabelsTypes: string = "No hay datos";
  @Input() dataLabels:string [] = ["No hay datos"];
  @Input() data: number[] = [0];



  constructor() {
  }
  ngOnInit(): void {
    console.log(this.data,this.dataLabels,this.dataLabelsTypes)
    this.createChart();


  }
  createChart(){
    const ctx = document.getElementById('chartbarPie') as ChartItem;
    const chart = new Chart( ctx, {
      type: 'pie',
      data: {
        datasets: [{
          label: this.dataLabelsTypes,
          data: [...this.data],
          backgroundColor: ['#FF0000', '#00FF00']
        }],
        labels: [...this.dataLabels]
      },

    });
  }

}
