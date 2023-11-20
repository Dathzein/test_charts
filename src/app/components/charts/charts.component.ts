import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartItem, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit{


  @Input() dataLabelsTypes: string = "No hay datos";
  @Input() dataLabels:string [] = ["No hay datos"];
  @Input() data: number[] = [0];

  @Input() dataLabelsTypes2: string = "No hay datos";
  @Input() dataLabels2:string [] = ["No hay datos"];
  @Input() data2: number[] = [0];



  constructor() {
  }
  ngOnInit(): void {
    this.createChart();
    console.log(this.data,this.dataLabels,this.dataLabelsTypes)


  }


  createChart(){
    const ctx = document.getElementById('chartBar') as ChartItem;
    const chart = new Chart<'bar'>(ctx , {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [...this.dataLabels],
	       datasets: [
          {
            label:  this.dataLabelsTypes ,
            data: [...this.data],
            backgroundColor: ['blue','red'],
          },

        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }








}
