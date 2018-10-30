import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  private username: string;
  private clientid = '5d621b955a6514997dd9';
  private clientsecret = '4494d300b5b3e7b6af95865b412b0e3b93440cdf';

  constructor(private http: HttpClient ) {
    console.log('service is now ready!');
    this.username = 'betty';
  }

  getHubInfo() {
    interface Apiresponse {
      bio: string;
      name: string;
      location: string;
      followers: string;
      following: string;
      public_gists: string;
      public_repos: string;
      html_url: string;
      avatar_url: string;
      company: string;
      login: string;
      email: string;
      hireable: string;
    }
    return this.http.get<Apiresponse>('https://api.github.com/users/' + this.username +
     '?client_id' + this.clientid + '&client_secret=' + this.
    clientsecret).toPromise();
  }

  getHubRepos() {
    interface Apiresponse {
     name: string;
     description: string;
    }
    interface Apiresponses extends Array<Apiresponse> {}
    return this.http.get<Apiresponses>('https://api.github.com/users/' + this.username +
     '/repos?client_id' + this.clientid + '&client_secret=' + this.
      clientsecret).toPromise();
  }
  updateHub(username: string) {
    this.username = username;
  }
}
