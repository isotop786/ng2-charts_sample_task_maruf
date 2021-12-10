import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ad-impressions',
  templateUrl: './ad-impressions.component.html',
  styleUrls: ['./ad-impressions.component.css']
})
export class AdImpressionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: { display: true },
    }
  };

  public barChartLabels: string[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

}
