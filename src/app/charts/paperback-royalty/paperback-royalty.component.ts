import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-paperback-royalty',
  templateUrl: './paperback-royalty.component.html',
  styleUrls: ['./paperback-royalty.component.css']
})
export class PaperbackRoyaltyComponent implements OnInit {

  date:any []
  paperback:any = []
  result:any
  barChart :any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchData()
    .subscribe(res=>{
      this.result =  res

      // loading data
      this.paperback = this.result.map((r:any)=> parseInt(r.paperbackRoyalty))
      this.date = this.result.map((r:any) => Date.parse(r.date))

      // rendering chart
      this.barChart = new Chart('barChart',{
        type:'bar',
        data:{
          labels:this.date,
          datasets:[
            {
              label:'PaperbackRoyalty',
              data:this.paperback,
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
