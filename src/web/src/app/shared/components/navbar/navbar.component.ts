import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private api: ApiService) { }

  user: any = undefined;

  ngOnInit(): void {
    this.getLoggedinUser()
  }


  async getLoggedinUser(){
    this.user = await this.api.getLoggedInUser();
    console.log(this)
  }
  

}
