import { Component, OnInit } from '@angular/core';
import { HubService } from '../hub.service';
import { User } from '../user';
import { Repo } from '../repo';
@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  repos: Repo[];
  username: string;
  user: User = new User();
  userdata: User = new User();
  constructor(private hubService: HubService) {
  }
//
  findHub() {
    this.hubService.updateHub(this.userdata.name);
    this.hubService.getHubInfo().then(hub => {
      this.user = hub;
      console.log(hub);
    });
    this.hubService.getHubRepos().then(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit() {
  }

}
