import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

interface Method {
  id: number;
  days: number;
}

@Component({
  selector: 'app-addsubscription',
  templateUrl: './addsubscription.component.html',
  styleUrls: ['./addsubscription.component.css']
})
export class AddsubscriptionComponent implements OnInit {

  private url = 'http://127.0.0.1:8000/api/subscriptions';
  constructor(private http : Http ) { }

  ngOnInit() {
  }

  // An array of Method
  days: Method[] = [
    { id: 1, days: 30 },
    { id: 2, days: 60 }
  ];

  //mySelection: number;

  submit(f){

    let data = f.value;
    let final = JSON.stringify(data);
    console.log(f);
    console.log(f.value);
    console.log(final);
   // this.http.post(this.url,)

}


}