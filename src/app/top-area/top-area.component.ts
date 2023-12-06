import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.scss']
})
export class TopAreaComponent {

  highcharts = Highcharts;

  barChart:any = {
    chart : {
      type : 'column'
    },

    title : {
      text : 'Monthly Qtr Report'
    },

    xAxis : {
      categories : ['Jan','Feb','Mar','Apr','May',"Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },

    yAxis : {
      title : {
        text : 'Monthly Revenues'
      }
    },
   series: [
    {
      data: [
        { name: 'Jan', y: 1000, color : 'red'},
        { name: 'Feb', y: 2000, color : 'blue'},
        { name: 'Mar', y: 3000, color : 'yellow' },
        { name: 'Apr', y: 7000, color : 'green' },
        { name: 'May', y: 6000, color : 'indigo' },
        { name: 'Jun', y: 3000, color : 'velvet' },
        { name: 'Jul', y: 5000, color : 'red' },
        { name: 'Aug', y: 4000, color : 'blue' },
        { name: 'Sep', y: 8000, color : 'navy' },
        { name: 'Oct', y: 1000, color : 'grey' },
        { name: 'Nov', y: 4000, color : 'pink' },
        { name: 'Dec', y: 9000, color : 'purple' },
      ],
      name : 'Months'
    }
    ]
  }



}
