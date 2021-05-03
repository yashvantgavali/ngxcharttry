import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Treands1Service {
 
  baseurl : string ="http://localhost:8080/joining/trends1";
  constructor(private httpclient : HttpClient) { }

  getcountPerYear():Observable<any>
  {
    return this.httpclient.get(`${this.baseurl}`);
  }

  // getJoiningCitiesData(): Observable<any> {
  //   return this.httpclient.get(`${this.baseurl}/onboardees/joiningCities`);
  // }

  // getDmdSkillData(): Observable<any> {
  //   return this.httpclient.get(`${this.baseurl}/demands/skills`);
  // }

  // getSelectedSkillData(): Observable<any> {
  //   return this.httpclient.get(`${this.baseurl}/onboardees/selected/skills`);
  // }
}
