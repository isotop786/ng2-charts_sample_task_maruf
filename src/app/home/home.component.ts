import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'EbookRoyalty', 'PaperBackRoyalty', 'AdSpends','AdImpressions', 'AdClicks' ],
    datasets: [ {
      data: [ 300, 500, 100,200,130 ]
    } ]
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];


}
