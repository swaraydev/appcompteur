import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'droranco-project';

  backResponse = ''

  public constructor(private httpClient : HttpClient){

  }

  ngOnInit(): void {
     this.httpClient.get(
       "http://localhost:8080",
     ).subscribe(
       (response : any ) => {
         this.backResponse = response
       }
     )
 }
}
