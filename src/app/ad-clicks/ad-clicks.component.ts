import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ad-clicks',
  templateUrl: './ad-clicks.component.html',
  styleUrls: ['./ad-clicks.component.css']
})
export class AdClicksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 67, 33 ],
        label: 'AdClicks',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(48,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',

      },
      // {
      //   data: [ 28, 48, 40, 19, 86, 27, 90 ],
      //   label: 'Series B',
      //   backgroundColor: 'rgba(77,83,96,0.2)',
      //   borderColor: 'rgba(77,83,96,1)',
      //   pointBackgroundColor: 'rgba(77,83,96,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(77,83,96,1)',
      //   fill: 'origin',
      // },
      // {
      //   data: [ 180, 480, 770, 90, 1000, 270, 400 ],
      //   label: 'Series C',
      //   yAxisID: 'y-axis-1',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'red',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    }
  }

  public lineChartType: ChartType = 'line';

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = AdClicksComponent.generateNumber(i);
      }
    }

  }


}
