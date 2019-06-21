import { Injectable, OnInit } from '@angular/core';
import { Http,Headers} from '@angular/http';
@Injectable()
export class GlobalService{

  constructor(private http:Http) { }
  getJuiceDetails()
  {

      return this.http.get("http://dd6ca01a.ngrok.io/api/getjuicedetails");

  }
  findbill(fromdate:string,todate:string,option:string)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    return this.http.get("http://dd6ca01a.ngrok.io/api/findordrdetails/"+fromdate+"/"+todate+"/"+option);

  }
  findallbill(fromdate:string,todate:string)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    return this.http.get("http://dd6ca01a.ngrok.io/api/getallbills/"+fromdate+"/"+todate);

  }
  insertbill(data:Object)
  {
    var headers=new Headers();
    headers.append('content-type','application/json')
    this.http.post("http://dd6ca01a.ngrok.io/api/bill",data,{headers:headers}).subscribe((res)=>
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
    this.http.post("http://dd6ca01a.ngrok.io/api/juice",data,{headers:headers}).subscribe((res)=>
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
    this.http.delete("http://dd6ca01a.ngrok.io/api/deletejuice/"+id).subscribe((res)=>
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
    this.http.put("http://dd6ca01a.ngrok.io/api//updatejuicedetails/"+id,data,{headers:headers}).subscribe((res)=>
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
