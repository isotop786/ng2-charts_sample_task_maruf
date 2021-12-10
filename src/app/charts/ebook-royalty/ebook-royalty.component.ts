
import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ebook-royalty',
  templateUrl: './ebook-royalty.component.html',
  styleUrls: ['./ebook-royalty.component.css']
})
export class EbookRoyaltyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {data:[65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        backgroundColor: 'rgba(60, 179, 113,0.4)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin'
      },
      {data:[55, 79, 83, 51, 76, 55, 40 ],
        label: 'Series C',
        backgroundColor: 'rgba(138,129,17,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin'
      },
      {data:[65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series B',
        backgroundColor: 'rgba(255,99,71,0.4)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin'
      },

    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };



  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = EbookRoyaltyComponent.generateNumber(i);
      }
    }
    this.chart?.update();
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
    },


  }





}
