import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs-compat/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  private username: string;
  private ClientId = "Iv1.cc86014801b5b793";
  private ClientSecret = "e084a7924b39b70144314a55068a7022854d8988";
  constructor(private http: Http) {
    console.log("service is ready");
    this.username = "mangowilliam";
  }
  getmyinfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id =" + this.ClientId + "&cleint_secret=" + this.ClientSecret)
      .map(res => res.json());
  }
  getmyRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id =" + this.ClientId + "&cleint_secret=" + this.ClientSecret)
      .map(res => res.json());
  }
  getinfo(username: string) {
    this.username = username;
  }
}
