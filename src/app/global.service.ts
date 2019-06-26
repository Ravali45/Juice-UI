import { Injectable, OnInit } from '@angular/core';
import { Http,Headers} from '@angular/http';
@Injectable()
export class GlobalService{
  global_Link = "http://localhost:3000"
  constructor(private http:Http) { }
  getJuiceDetails()
  {

      return this.http.get(this.global_Link+"/api/getjuicedetails");

  }
  findbill(fromdate:string,todate:string,option:string)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    return this.http.get(this.global_Link+"/api/findordrdetails/"+fromdate+"/"+todate+"/"+option);

  }
  findallbill(fromdate:string,todate:string)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    return this.http.get(this.global_Link+"/api/getallbills/"+fromdate+"/"+todate);

  }
  insertbill(data:Object)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    this.http.post(this.global_Link+"/api/bill",data,{headers:headers}).subscribe((res)=>
    {
        if(res.ok)
        {

            console.log("added sucessfully")

        }

    })
    console.log(data)

  }
  insertjuicedetails(data:object)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    this.http.post(this.global_Link+"/api/juice",data,{headers:headers}).subscribe((res)=>
    {
        if(res.ok)
        {

            console.log("added sucessfully")

        }

    })
    console.log(data)
  }
  deletejuice(id)
  {
    // var headers=new Headers();
    // headers.append('content-type','application/json')
    this.http.delete(this.global_Link+"/api/deletejuice/"+id).subscribe((res)=>
    {
        if(res.ok)
        {

            console.log("Deleted sucessfully")
            return "del";
        }

    })
    console.log(id)
    return "del";
  }
  updatejuicedetails(id,data:object)
  {
    console.log(id);
    console.log(data);
    var headers=new Headers();
    headers.append('content-type','application/json')
    this.http.put(this.global_Link+"/api//updatejuicedetails/"+id,data,{headers:headers}).subscribe((res)=>
    {
        if(res.ok)
        {

            console.log("Updated sucessfully")
            return "del";
        }
    })
     return "del";
    // console.log(id)
  }
}
