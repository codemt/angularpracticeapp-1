import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  // An array of Method
  days: Method[] = [
    { id: 1, days: 30 },
    { id: 2, days: 60 }
  ];

  //mySelection: number;

  submit(f){

    console.log(f);
    console.log(f.value);
}


}