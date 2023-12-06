import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.scss']
})
export class GridDataComponent implements OnInit {

  constructor(private http:HttpClient){}

  column_names:string[] = [];
  grid_data:any = [];
  teams:any[] = [];
  values:any[] = [];
  ngOnInit():void{
    this.http.get('https://1.api.fy23ey04.careers.ifelsecloud.com/').subscribe((res:any)=>{

      this.column_names = res.grid_columns.map((item:any) => item.column_name)
      this.grid_data = res.grid_data

      this.teams = res.grid_data.map((team:any) => team.teams)

      this.teams.forEach((inner:any)=>{
        // console.log(inner.value)
        inner.forEach((item:any)=>{
          this.values = item.value;
          // console.log(this.values)
        })
      })
      // console.log(this.teams)
    })
  };

  selectAll(event:any){
    const isChecked = event?.target.checked;
    this.grid_data.forEach((data:any)=>{
      data.selected = isChecked
    })
  }

}
