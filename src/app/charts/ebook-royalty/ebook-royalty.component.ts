
import { Component, ViewChild, OnInit, IterableDiffers } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType,Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-ebook-royalty',
  templateUrl: './ebook-royalty.component.html',
  styleUrls: ['./ebook-royalty.component.css']
})
export class EbookRoyaltyComponent implements OnInit {
  ebook:any = []
  date:any []
  paperback:any = []
  result:any
  lineChart :any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchData()
    .subscribe(res => {
      console.log(res)
      this.result = res;

     this.ebook = this.result.map((r:any)=> parseInt(r.ebookRoyalty) )
     this.date = this.result.map((r:any) => Date.parse(r.date))
     this.paperback = this.result.map((r:any)=> parseInt(r.paperbackRoyalty))
      console.log(this.ebook)
      // console.log(this.date)
      this.lineChart = new Chart('lineChart',{
        type:'line',
        data:{
          labels:this.date,
          datasets:[
            //ebookRoyalty
            {
              label:'EbookRoyalty',
              data:this.ebook,
              borderWidth:3,
              fill:false,
              backgroundColor:'rgba(34,183,84,0.2)',
              borderColor:'#3e95cd'
            },
            //ebookRoyalty end

            //paperbackRoyalty
            {
              label:'PaperBackRoyalty',
              data:this.paperback,
              borderWidth:3,
              fill:true,
              backgroundColor:'rgba(134,83,84,0.2)',
              borderColor:'#3e95cd'
            }
            //paperbackRoyalty end
          ]
        }
      })
    })
  }









}
