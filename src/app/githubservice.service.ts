import { Github } from './user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  gitname: Github;

  //   getgitinfo() {
  //     interface ApiResponse(){
  //       id: number;
  //       login: string;
  //       repos_url: string;
  //       avatar_url: string;
  //       url: string;
  //       created_at: Date;
  //     }
  //   }
  //   const promise = new Promise((resolve, reject) => {
  //     var apiUrl = ("https://api.github.com/users/" + '?access_token=' + environment.apiKey);
  //
  //     this.http.get<ApiResponse>(apiUrl).topromise().then(
  //       (response) => {
  //         this.gitname.id = response.id;
  //         this.gitname.login = response.login;
  //         this.gitname.repos_url = response.repos_url;
  //         this.gitname.avatar_url = response.avatar_url;
  //         this.gitname.url = response.url;
  //         this.gitname.created_at = response.created_at;
  //
  //         resolve();
  //
  //         console.log(response.login);
  //       },
  //       (error) => {
  //         alert('error');
  //         reject(error);
  //       }
  //     );
  //   });
  // return Promise;
  // }
  //
  // constructor(private http: HttpClient) {
  //   this.gitname = new Github(0, '', '', '', '', new Date());
  // }
}
