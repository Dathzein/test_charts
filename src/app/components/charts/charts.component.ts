import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
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

  label = "";

  public chart!: Chart;


  constructor() {
  }
  ngOnInit(): void {
    this.createChart();
  }


  createChart(){

    this.chart = new Chart<'bar'>("MyChart", {
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


  @ViewChild(BaseChartDirective) chartDirective: BaseChartDirective | undefined;

  public chartType: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1,
        max: 300
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: this.dataLabels,
    datasets: [
      { data: this.data, label: this.label },
    ],
  };


}
