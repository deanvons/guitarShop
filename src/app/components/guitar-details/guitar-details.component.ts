import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Guitar } from '../../models/Guitar';
import { API_URL } from '../../api/urls';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar-details',
  standalone: true,
  imports: [],
  templateUrl: './guitar-details.component.html',
  styleUrl: './guitar-details.component.css'
})
export class GuitarDetailsComponent implements OnInit{

  private _http:HttpClient;
  public guitarData:Guitar|undefined;
  private _url :ActivatedRoute|undefined;

  constructor(http:HttpClient,url:ActivatedRoute){
    this._http = http;
this._url = url;
  }

ngOnInit(): void {
  let selectedGuitar:string | null | undefined = this._url?.snapshot.paramMap.get("guitarId");

  // fetch that guitars
  this._http.get<Guitar>(`${API_URL}/${selectedGuitar}`)
  .subscribe({
    next:(guitarData)=>{this.guitarData=guitarData}
  })
  
  ;
  
}

// render details about a selected guitar

// fetch data for this guitar? -> 
// have it already in state?
// pass it from another component






}
