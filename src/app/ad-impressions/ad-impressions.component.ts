import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ad-impressions',
  templateUrl: './ad-impressions.component.html',
  styleUrls: ['./ad-impressions.component.css']
})
export class AdImpressionsComponent implements OnInit {

  date:any []
  adimpression:any = []
  result:any
  barChart :any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.fetchData()
    .subscribe(res=>{
      this.result =  res

      // loading data
      this.adimpression = this.result.map((r:any)=> parseInt(r.adImpressions))
      this.date = this.result.map((r:any) => Date.parse(r.date))

      // rendering chart
      this.barChart = new Chart('barChart',{
        type:'bar',
        data:{
          labels:this.date,
          datasets:[
            {
              label:'AdImpressions',
              data:this.adimpression,
              borderWidth:10,
              backgroundColor:'rgba(134,83,154,0.2)',
              borderColor:'#3e95cd',

          }
          ]
        }
      })

    })

  }

}
