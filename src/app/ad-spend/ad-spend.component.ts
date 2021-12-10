import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-ad-spend',
  templateUrl: './ad-spend.component.html',
  styleUrls: ['./ad-spend.component.css']
})
export class AdSpendComponent implements OnInit {
  date:any []
  adSpends:any = []
  result:any
  line :any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchData()
    .subscribe(res=>{
      this.result = res

      // loading data
      this.adSpends = this.result.map((r:any)=> Math.round(r.adSpend))
      this.date = this.result.map((r:any) =>  r.date.toString().split('T')[0])

      // rendering chart
      this.line = new Chart('line',{
        type:'line',
        data:{
          labels:this.date,
          datasets:[
            {
              label:'AdSpend',
              data:this.adSpends,
              borderWidth:1,
              backgroundColor:'rgba(34,183,84,0.2)',
              borderColor:'#3e95cd',

          }
          ]
        }
      })


    })
  }



}
