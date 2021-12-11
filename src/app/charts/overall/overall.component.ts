import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType,Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit {
  ebook:any = []
  date:any []
  paperback:any = []
  adImpressions:any = []
  adSpends:any = []
  adClicks:any = []
  result:any
  lineChart :any
  lineChart2 :any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchData()
    .subscribe(res =>{
      this.result = res

      // loading data
      this.ebook = this.result.map((r:any)=> parseInt(r.ebookRoyalty) )
      this.date = this.result.map((r:any) => r.date.toString().split('T')[0])
      this.paperback = this.result.map((r:any)=> parseInt(r.paperbackRoyalty))
      this.adImpressions = this.result.map((r:any) => Math.round(r.adImpressions))
      this.adClicks = this.result.map((r:any) => Math.round(r.adClick))
      this.adSpends = this.result.map((r:any) => Math.round(r.adSpend))


      this.lineChart = new Chart('lineChart',{
        type:'line',
        data:{
          labels:this.date,
          datasets:[
             //ebookRoyalty
             {
              label:'EbookRoyalty',
              data:this.ebook,
              borderWidth:1,
              fill:false,
              backgroundColor:'rgba(34,183,84,0.2)',
              borderColor:'#3e95cd'
            },
            //ebookRoyalty end
             //paperbackRoyalty
             {
              label:'PaperbackRoyalty',
              data:this.paperback,
              borderWidth:1,
              fill:false,
              backgroundColor:'rgba(234,83,84,0.2)',
              borderColor:'#3e95cd'
            },
            //paperback end

          ]
        }
      })

      this.lineChart2 = new Chart('lineChart2',{
        type:'line',
        data:{
          labels:this.date,
          datasets:[
            {
              label:'AdClick',
              data:this.adClicks,
              borderWidth:0.5,
              fill:false,
              backgroundColor:'rgba(34,183,84,0.2)',
              borderColor:'#3e95cd'
            },
            {
              label:'AdSpends',
              data:this.adSpends,
              borderWidth:0.5,
              fill:false,
              backgroundColor:'rgba(104,103,184,0.2)',
              borderColor:'#3e95cd'
            },

            {
              label:'AdImpressions',
              data:this.adImpressions,
              borderWidth:0.5,
              fill:false,
              backgroundColor:'rgba(34,83,184,0.2)',
              borderColor:'#3e95cd'
            }
          ]

          }
        }
      )



    })
  }

}
